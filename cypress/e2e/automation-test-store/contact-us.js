/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm_first_name").type("Jane");
    cy.get("#ContactUsFrm_email").type("jane_doe@email.com");
    cy.get("#ContactUsFrm_enquiry").type("Lorem ipsum dolor, sit amet consectetur adipisicing elit.");
    cy.get(".col-md-6 > .btn").click();
    cy.contains("Your enquiry has been successfully sent to the store owner!").should("be.visible");
  });
});
