/// <reference types="cypress" />

describe("Alias and invoke", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
  });
  it("Validate a specific hair care product", () => {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate product thumbnail in home page", () => {
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail").find(".productcart");
    cy.get("@productThumbnail").find(".productcart").invoke("attr", "title").should("include", "Add to Cart");
  });

  it("Calculate total of normal and sale products", () => {
    cy.get(".thumbnail").as("productThumbnail");
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    let itemsTotal = 0;
    cy.get("@itemPrice").then(($itemPrice) => {
      let itemsPriceTotal = 0;
      const itemsNoSalePrice = $itemPrice.split("$");
      for (let i = 0; i < itemsNoSalePrice.length; i++) {
        cy.log(itemsNoSalePrice[i]);
        itemsPriceTotal += Number(itemsNoSalePrice[i]);
      }
      cy.log("Non sale price items total: " + itemsPriceTotal);
      itemsTotal += itemsPriceTotal;
    });
  });
});
