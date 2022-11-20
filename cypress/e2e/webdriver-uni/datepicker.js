/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click();
  });

  const daysRange = [5, 30, 100, 360, 450];

  daysRange.forEach((dayInFuture) => {
    it(`Select ${dayInFuture} days in the future date from the datepicker`, () => {
      const date = new Date();
      date.setDate(date.getDate() + dayInFuture);

      const futureYear = date.getFullYear();
      const futureMonth = date.toLocaleDateString("en-US", { month: "long" });
      const futureDay = date.getDate();

      cy.get(".input-group-addon").click();

      function selectFutureMonthAndYear() {
        cy.get(".datepicker")
          .find(".datepicker-switch")
          .first()
          .then((currentDate) => {
            if (!currentDate.text().includes(futureYear)) {
              cy.get(".next").first().click();
              selectFutureMonthAndYear();
            }
          })
          .then(() => {
            cy.get(".datepicker-dropdown")
              .find(".datepicker-switch")
              .first()
              .then((currentDate) => {
                if (!currentDate.text().includes(futureMonth)) {
                  cy.get(".next").first().click();
                  selectFutureMonthAndYear();
                }
              });
          });
      }
      function selectFutureDay() {
        cy.get("[class='day']").contains(futureDay).click();
      }

      selectFutureMonthAndYear();
      selectFutureDay();
    });
  });

  daysRange.forEach((dayInPast) => {
    it(`Select ${dayInPast} days in the past date from the datepicker`, () => {
      const date = new Date();
      date.setDate(date.getDate() - dayInPast);

      const futureYear = date.getFullYear();
      const futureMonth = date.toLocaleDateString("en-US", { month: "long" });
      const futureDay = date.getDate();

      cy.get(".input-group-addon").click();

      function selectPastMonthAndYear() {
        cy.get(".datepicker")
          .find(".datepicker-switch")
          .first()
          .then((currentDate) => {
            if (!currentDate.text().includes(futureYear)) {
              cy.get(".prev").first().click();
              selectPastMonthAndYear();
            }
          })
          .then(() => {
            cy.get(".datepicker-dropdown")
              .find(".datepicker-switch")
              .first()
              .then((currentDate) => {
                if (!currentDate.text().includes(futureMonth)) {
                  cy.get(".prev").first().click();
                  selectPastMonthAndYear();
                }
              });
          });
      }
      function selectPastDay() {
        cy.get("[class='day']").contains(futureDay).click();
      }

      selectPastMonthAndYear();
      selectPastDay();
    });
  });
});
