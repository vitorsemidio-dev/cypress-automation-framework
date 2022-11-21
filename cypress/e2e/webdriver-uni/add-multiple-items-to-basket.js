/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  before(() => {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific items to basket", () => {
    const products = globalThis.data.productName;
    products.forEach((productName) => {
      cy.addProductToBasket(productName);
    });
    cy.get(".dropdown-toggle > .label").should("contain", products.length);
    cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
    cy.get(".product-list table tr").should("have.length", products.length + 1);
  });
});
