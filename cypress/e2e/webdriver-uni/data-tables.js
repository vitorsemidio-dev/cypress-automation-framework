/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });

  it("Calculate and assert the total age of all users", () => {
    let totalAge = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        const regexOnlyNumbers = /^[0-9]*$/;
        const value = $el.text();
        if (regexOnlyNumbers.test(value)) {
          totalAge += Number(value);
        }
      })
      .then(() => {
        const totalAgeExpected = 322;
        expect(totalAge).to.equal(totalAgeExpected);
      });
  });

  it.only("calculate and assert the age of a given user based on the last name", () => {
    const givenLastName = "Woods";
    const ageExpected = "80"
    cy.get("#thumbnail-1 td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text === givenLastName) {
        cy.wrap($el).next().invoke('text').should("equal", ageExpected);
      }
    });
  });

  const users = [
    { lastName: "Smith", age: "45" },
    { lastName: "Jackson", age: "94" },
    { lastName: "Doe", age: "20" },
    { lastName: "Jones", age: "27" },
    { lastName: "Jackson", age: "56" },
    { lastName: "Woods", age: "80" },
  ]
  
  users.forEach((user) => {
    it.only(`calculate and assert the age of user ${user.lastName} based on the last name`, () => {
      const givenLastName = user.lastName;
      const ageExpected = user.age
      cy.get("#thumbnail-1 td:nth-child(2)").each(($el, index, $list) => {
        const text = $el.text();
        if (text === givenLastName) {
          cy.wrap($el).next().invoke('text').should("equal", ageExpected);
        }
      });
    });
  })

});
