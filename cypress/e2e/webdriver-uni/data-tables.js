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

  it("calculate and assert the age of a given user based on the last name", () => {
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
    { firstName: "John", lastName: "Smith", age: "45" },
    { firstName: "Jemma", lastName: "Jackson", age: "94" },
    { firstName: "Michael", lastName: "Doe", age: "20" },
    { firstName: "Jason", lastName: "Jones", age: "27" },
    { firstName: "Sarah", lastName: "Jackson", age: "56" },
    { firstName: "Bob", lastName: "Woods", age: "80" },
  ]
  
  users.forEach((user) => {
    it(`calculate and assert the age of user "${user.firstName} ${user.lastName}" based on the fullname`, () => {
      const givenFirstName = user.firstName;
      const givenLastName = user.lastName;
      const ageExpected = user.age
      cy.get("#thumbnail-1 td:nth-child(2)").each(($el, index, $list) => {
        const firstName = cy.wrap($el).prev();
        const lastName = $el.text();
        if (firstName === givenFirstName && lastName === givenLastName) {
          cy.wrap($el).next().invoke('text').should("equal", ageExpected);
        }
      });
    });
  })

});
