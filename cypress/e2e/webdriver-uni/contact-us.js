/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Jane");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("jane_doe@email.com");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
  });

  it("Should no be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Jane");
    cy.get('[name="last_name"]').type("Doe");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
  });
});