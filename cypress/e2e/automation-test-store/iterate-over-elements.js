/// <reference types="cypress" />

describe("Iterate over elements", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Log information all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log(`Index: ${index} ${$el.text()}`);
    });
  });

  it("Add specific produt to basket", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });

  const productsName = [
    "Seaweed Conditioner",
    "Eau Parfumee au The Vert Shampoo",
    "Pantene Pro-V Conditioner, Classic Care",
    "Curls to straight Shampoo",
  ];

  productsName.forEach((productName) => {
    it(`Visit "${productName}" produt page with custom commands`, () => {
      cy.selectProduct(productName);
      cy.get("h1.productname").should("contain", productName);
    });
  });
});
