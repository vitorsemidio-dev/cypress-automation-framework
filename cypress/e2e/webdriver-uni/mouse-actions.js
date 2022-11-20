describe("Test mouse actions", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
  });

  it("I should be able to drag and drop a draggable item", () => {
    cy.get("#droppable > p > :nth-child(1)").should("contain", "DROP HERE!");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable").trigger("mousemove").trigger("mouseup", { force: true });
    cy.get("#droppable > p > :nth-child(1)").should("contain", "Dropped");
  });

  it("I should be able to perform a double mouse click", () => {
    const expectColor = "rgb(254, 196, 45)";
    cy.get("#double-click").should("have.css", "background-color", expectColor);
    cy.get("#double-click").dblclick();
    const expectColorDbClick = "rgb(147, 203, 90)";
    cy.get("#double-click").should("have.css", "background-color", expectColorDbClick);
  });

  it("I should be able hold down the left mouse click button on a given element", () => {
    const expectColor = "rgb(254, 196, 45)";
    cy.get("#double-click").should("have.css", "background-color", expectColor);
    cy.get("#double-click").dblclick();
    const expectColorDbClick = "rgb(147, 203, 90)";
    cy.get("#double-click").should("have.css", "background-color", expectColorDbClick);
  });
});
