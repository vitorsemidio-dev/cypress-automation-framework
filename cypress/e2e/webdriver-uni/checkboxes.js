describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();
  });

  it("Check and validate checkbox with 'check'", () => {
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check();
    cy.get("@option-1").should("be.checked");
  });

  it("Check and validate checkbox with 'click'", () => {
    cy.get("#checkboxes > :nth-child(3) > input").as("option-2");
    cy.get("@option-2").click();
    cy.get("@option-2").should("be.checked");
  });

  it("Uncheck and validate checkbox with 'uncheck'", () => {
    cy.get("#checkboxes > :nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck();
    cy.get("@option-3").should("not.be.checked");
  });

  it("Check multiple checkboxes 'uncheck'", () => {
    cy.get("input[type='checkbox']").as("all-checkboxes");
    cy.get("@all-checkboxes").check(["option-1", "option-2", "option-3", "option-4"]);
    cy.get("@all-checkboxes").each(($inputCheckbox) => {
      cy.wrap($inputCheckbox).should("be.checked");
    });
  });
});
