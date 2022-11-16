export default class ContactUs_PO {
  contactUs_Submition(firstName, lastName, email, message) {
    this.fill_first_name(firstName);
    this.fill_last_name(lastName);
    this.fill_email(email);
    this.fill_message(message);
    cy.get('[type="submit"]').click();
  }

  assert_Submition($selector, textToAssert) {
    cy.get($selector).should("contain", textToAssert);
  }

  fill_first_name(value) {
    if (!value) return;
    cy.get('[name="first_name"]').type(value);
  }
  fill_last_name(value) {
    if (!value) return;
    cy.get('[name="last_name"]').type(value);
  }
  fill_email(value) {
    if (!value) return;
    cy.get('[name="email"]').type(value);
  }
  fill_message(value) {
    if (!value) return;
    cy.get('[name="message"]').type(value);
  }
}
