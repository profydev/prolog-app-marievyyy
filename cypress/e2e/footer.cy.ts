import { version } from "../../package.json";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("should display app version from package.json", () => {
      cy.get("footer").contains(`Version: ${version}`);

      cy.get("footer")
        .contains("Docs")
        .should("have.attr", "href", "/dashboard#");

      cy.get("footer")
        .contains("API")
        .should("have.attr", "href", "/dashboard#");

      cy.get("footer")
        .contains("Help")
        .should("have.attr", "href", "/dashboard#");

      cy.get("footer")
        .contains("Commnunity")
        .should("have.attr", "href", "/dashboard#");

      cy.get("footer")
        .find("img")
        .should("have.attr", "src", "/icons/logo-small.svg");
    });
  });
});
