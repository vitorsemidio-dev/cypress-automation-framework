/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then((linkText) => {
        cy.log("Clicked on link using text: " + linkText.text());
      });
    cy.get("#ContactUsFrm_first_name").type("Jane");
    cy.get("#ContactUsFrm_email").type("jane_doe@email.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("Lorem ipsum dolor, sit amet consectetur adipisicing elit.");
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should("have.text", "Your enquiry has been successfully sent to the store owner!");
  });
});
