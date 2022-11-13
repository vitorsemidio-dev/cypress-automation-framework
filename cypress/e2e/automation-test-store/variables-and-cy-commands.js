/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Verifying variables, cypress commands and jquery commands", () => {
  // * Recommended Approach
  it("Navegating to specific product page", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  // * The following will pass
  // ! But it not recommended by cypress
  it.skip("[NOT_RECOMMENDED] Navegating to specific product page", () => {
    cy.visit("https://www.automationteststore.com/");
    const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    makeupLink.click();
    const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    skincareLink.click();
  });

  // ! The following will fail
  it.skip("[FAIL] Navegating to specific product page", () => {
    cy.visit("https://www.automationteststore.com/");
    const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    makeupLink.click();
    skincareLink.click();
  });

  it("Navegating to specific Makeup page", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("h1 .maintext").then(($headerEl) => {
      const headerText = $headerEl.text();
      cy.log("Found header text: " + headerText);
      expect(headerText).is.eq("Makeup")
    });
  });
});
