describe("Verify radio buttons via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();
  });

  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons").find("[type='radio']").as("all-radio-buttons");
    cy.get("@all-radio-buttons").check(["green"]);
    cy.get("input[value='green']").as("option-green");
    cy.get("@option-green").should("be.checked");
  });

  it("Check specific radio buttons with 'eq'", () => {
    cy.get("#radio-buttons").find("[type='radio']").as("all-radio-buttons");
    cy.get("@all-radio-buttons").eq(2).as("option-3");
    cy.get("@option-3").check();
    cy.get("@option-3").should("be.checked");
  });

  it("Validate the states of specific radio buttons", () => {
    cy.get("[type='radio'][value='lettuce']").should("not.be.checked");
    cy.get("[type='radio'][value='cabbage']").should("be.disabled");
    cy.get("[type='radio'][value='pumpkin']").should("be.checked");
  });
});
