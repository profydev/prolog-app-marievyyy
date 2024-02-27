import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("request failed", () => {
    it("should show error alert when failed to fetch the data", () => {
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
        statusCode: 500, // Simulate server error
      }).as("getProjects");

      cy.visit("http://localhost:3000/dashboard");

      cy.wait("@getProjects");

      // Assert that the error alert is displayed
      cy.get(".alert-error", { timeout: 10000 }).should("be.visible");
    });

    it("should refetch request after clicking try again button", () => {
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
        statusCode: 500, // Simulate server error
      }).as("getProjects");

      cy.visit("http://localhost:3000/dashboard");

      // Wait for the initial request to complete and verify error alert is visible
      cy.get(".alert-error", { timeout: 10000 }).should("be.visible");

      // Intercept the refetch request after clicking the "Try again" button
      cy.intercept("GET", "https://prolog-api.profy.dev/project").as(
        "refetchProjects",
      );

      // Click the "Try again" button
      cy.contains("Try again").click();

      // Wait for the refetch request to complete
      cy.wait("@refetchProjects");

      // Assert that the refetch request was successful and data is now loaded
      cy.get(".alert-error").should("not.exist");
    });
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("should show loader when loading data then hide after the project renders", () => {
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      }).as("getProjects");

      // Now visit the page and assert the loading spinner is shown
      cy.visit("http://localhost:3000/dashboard");

      cy.get(".loader")
        .should("be.visible")
        .then(() => {
          cy.wait("@getProjects");
          cy.get(".loader").should("not.exist");
        });
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusText = ["Critical", "Warning", "Stable"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(capitalize(statusText[index]));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
