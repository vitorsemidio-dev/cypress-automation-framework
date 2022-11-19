/// <reference types="cypress" />

describe("Handling IFrame & Modals", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click();
  });

  it("Handle webdriveruni IFrame & Modals", () => {
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find(".modal-header").should("contain", "Welcome to webdriveruniversity.com");
    cy.get("@iframe")
      .find(".modal-body")
      .should(
        "contain",
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...",
      );
  });

  it("Validate if modal close correctly", () => {
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");
    cy.get("@modal").should("be.visible");
    cy.get("@modal").find(".close").click();
    cy.get("@modal").should("not.be.visible");

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@modal").should("be.visible");
    cy.get("@modal").find("button[data-dismiss='modal']").contains("Close").click();
    cy.get("@modal").should("not.be.visible");

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@modal").should("be.visible");
    cy.get("@modal").find("button[data-dismiss='modal']").contains("Find Out More").click();
    cy.get("@modal").should("not.be.visible");
  });
});

describe("Handle IFrame & Navigate Page", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click();
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
  });

  it("Should click link 'Our Products'", () => {
    cy.get("@iframe").find(".nav").contains("Our Products").click();
    cy.get("@iframe").find(".sub-heading").should("be.visible");
  });

  it("Should click link 'Contact Us'", () => {
    cy.get("@iframe").find(".nav").contains("Contact Us").click();
  });
});
