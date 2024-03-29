/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Verifying variables, cypress commands and jquery commands", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
  });

  // * Recommended Approach
  it("Navegating to specific product page", () => {
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  // * The following will pass
  // ! But it not recommended by cypress
  it("[NOT_RECOMMENDED] Navegating to specific product page", () => {
    const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    makeupLink.click();
    const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    skincareLink.click();
  });

  // ! The following will fail
  it.skip("[FAIL] Navegating to specific product page", () => {
    const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    makeupLink.click();
    skincareLink.click();
  });

  it("Navegating to specific Makeup page", () => {
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("h1 .maintext").then(($headerEl) => {
      const headerText = $headerEl.text();
      cy.log("Found header text: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it("Validate properties of the Contact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").should("contain", "First name");

    // JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then(($element) => {
      const firstNameText = $element.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      // Embedded commands (Closure)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
