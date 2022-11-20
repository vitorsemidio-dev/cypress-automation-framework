describe("Verify Autocomplete dropdown lists via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
  });

  it("Verify if the list start with the letter type uppercase", () => {
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *").as("suggestions");
    cy.get("@suggestions").each(($el, index, $list) => {
      const prod = $el.text();
      expect(prod).to.match(/^A/);
    });
  });

  it("Verify if the list start with the letter type lowercase", () => {
    cy.get("#myInput").type("a");
    cy.get("#myInputautocomplete-list > *").as("suggestions");
    cy.get("@suggestions").each(($el, index, $list) => {
      const prod = $el.text();
      expect(prod).to.match(/^A/);
    });
  });

  it("Select specific product via autocomplete list", () => {
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *").as("suggestions");
    cy.get("@suggestions").each(($el, index, $list) => {
      const prod = $el.text();
      const selectProduct = "Apple";
      if (prod === selectProduct) {
        $el.trigger("click");

        cy.get("#submit-button").click();
        cy.url().should("contain", selectProduct);
      }
    });
  });

  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  alpha.forEach((letter) => {
    it(`Select the first product with letter ${letter}`, () => {
      cy.get("#myInput").type(letter);
      cy.get("#myInputautocomplete-list > *").as("suggestions");
      cy.get("@suggestions").each(($el, index, $list) => {
        if (index === 0) {
          const productName = $el.text();
          cy.wrap($el).click();
          cy.get("#submit-button").click();
          cy.url().should("contain", productName.split(" ").join("+"));
        }
      });
    });
  });
});
