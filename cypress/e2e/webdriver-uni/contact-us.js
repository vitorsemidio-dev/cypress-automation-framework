import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import ContactUs_PO from "../../support/pageObjects/webdriver-uni/ContactUs_PO";

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  const homepage_PO = new Homepage_PO();
  const contactUs_PO = new ContactUs_PO();

  before(() => {
    cy.fixture("contact-us.json").then(function (data) {
      // this.data = data;
      globalThis = data;
    });
  });

  beforeEach(() => {
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    const contactUsJSON = globalThis;
    cy.get('[name="first_name"]').type(contactUsJSON.firstName);
    cy.get('[name="last_name"]').type(contactUsJSON.lastName);
    cy.get('[name="email"]').type(contactUsJSON.email);
    cy.get("textarea.feedback-input").type(contactUsJSON.comment);
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("[WITH PO] Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    contactUs_PO.contactUs_Submition(
      "Jane",
      "Doe",
      "jane_doe@email.com",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    );
    contactUs_PO.assert_Submition("h1", "Thank You for your Message!");
  });

  it("Should no be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.get('[name="first_name"]').type("Jane");
    cy.get('[name="last_name"]').type("Doe");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
    cy.get("body").contains("Error: Invalid email address");
  });

  it("[WITH PO] Should no be able to submit a successful submission via contact us form as all fields are required", () => {
    contactUs_PO.contactUs_Submition("Jane", "Doe", "", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    contactUs_PO.assert_Submition("body", "Error: all fields are required");
    contactUs_PO.assert_Submition("body", "Error: Invalid email address");
  });

  it("Should be able to submit a successful submission via contact us form using 'Cypress.env'", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(Cypress.env("first_name"));
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("jane_doe@email.com");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should  fail and take screenshot", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(Cypress.env("first_name"));
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("jane_doe@email.com");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message! FAIL");
  });
});

describe("Test Contact Us form via WebdriverUni with specific viewport size", () => {
  const homepage_PO = new Homepage_PO();
  const contactUs_PO = new ContactUs_PO();

  beforeEach(() => {
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
    cy.viewport(550, 750);
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type("Jane");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("jane_doe@email.com");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("[WITH PO] Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    contactUs_PO.contactUs_Submition(
      "Jane",
      "Doe",
      "jane_doe@email.com",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    );
    contactUs_PO.assert_Submition("h1", "Thank You for your Message!");
  });

  it("Should no be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.get('[name="first_name"]').type("Jane");
    cy.get('[name="last_name"]').type("Doe");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
    cy.get("body").contains("Error: Invalid email address");
  });

  it("[WITH PO] Should no be able to submit a successful submission via contact us form as all fields are required", () => {
    contactUs_PO.contactUs_Submition("Jane", "Doe", "", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    contactUs_PO.assert_Submition("body", "Error: all fields are required");
    contactUs_PO.assert_Submition("body", "Error: Invalid email address");
  });

  it("Should be able to submit a successful submission via contact us form using 'Cypress.env'", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(Cypress.env("first_name"));
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("jane_doe@email.com");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should fail and take screenshot", () => {
    cy.viewport("iphone-xr");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(Cypress.env("first_name"));
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("jane_doe@email.com");
    cy.get("textarea.feedback-input").type("Lorem ipsum dolor sit amet consectetur, adipisicing elit.");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message! FAIL");
  });
});
