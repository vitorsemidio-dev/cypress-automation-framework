/// <reference types="Cypress" />

describe("Test File Upload via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
  });

  it("Upload a file...", () => {
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.avif");
    cy.get("#submit-button").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Your file has now been uploaded!");
    });
  });

  it("Upload No file...", () => {
    cy.get("#submit-button").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("You need to select a file to upload!");
    });
  });
});
