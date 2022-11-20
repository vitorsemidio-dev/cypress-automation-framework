// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("navigateTo_WebdriverUni_HomePage", () => {
  cy.visit(Cypress.env("webdriveruni_homepage"));
});

Cypress.Commands.add("navigateTo_WebdriverUni_ContactUsPage", () => {
  cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
});

Cypress.Commands.add("selectProduct", (producttName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text().includes(producttName)) {
      cy.wrap($el).click();
    }
  });
});
Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment) => {
  cy.get('[name="first_name"]').type(firstName);
  cy.get('[name="last_name"]').type(lastName);
  cy.get('[name="email"]').type(email);
  cy.get("textarea.feedback-input").type(comment);
  cy.get('[type="submit"]').click();
});
Cypress.Commands.add("webdriverUni_Assert_Submission", ($selector, text) => {
  cy.get($selector).should("contain", text);
});
