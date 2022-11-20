describe("Interact with dropdown list via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();

    cy.get("#dropdowm-menu-1").as("dropdown-1");
    cy.get("#dropdowm-menu-2").as("dropdown-2");
    cy.get("#dropdowm-menu-3").as("dropdown-3");
  });

  it("select specific values by 'label' via select dropdown lists", () => {
    cy.get("@dropdown-1").select("C#");
    cy.get("@dropdown-1").should("have.value", "c#");

    cy.get("@dropdown-2").select("JUnit");
    cy.get("@dropdown-2").should("have.value", "junit");

    cy.get("@dropdown-3").select("CSS");
    cy.get("@dropdown-3").should("have.value", "css");
  });

  it("select specific values by 'value' via select dropdown lists", () => {
    cy.get("@dropdown-1").select("c#");
    cy.get("@dropdown-1").should("have.value", "c#");

    cy.get("@dropdown-2").select("junit");
    cy.get("@dropdown-2").should("have.value", "junit");

    cy.get("@dropdown-3").select("css");
    cy.get("@dropdown-3").should("have.value", "css");
  });

  it("select specific values by 'index' via select dropdown lists", () => {
    cy.get("@dropdown-1").select(1);
    cy.get("@dropdown-1").should("have.value", "c#");

    cy.get("@dropdown-2").select(3);
    cy.get("@dropdown-2").should("have.value", "junit");

    cy.get("@dropdown-3").select(1);
    cy.get("@dropdown-3").should("have.value", "css");
  });
});
