/// <reference types="cypress" />

context("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should successfully submit the electronic app", () => {
    cy.findByText("App");
    cy.findByLabelText("Name").type("Cory"); // Exercise: Type into the DOB field
    cy.findAllByLabelText("Date of Birth").type("Sept 1 1940");
  });

  it("should allow navigating between steps", () => {
    cy.findByLabelText("Name").type("Cory"); // Exercise: Type into the DOB field
    cy.findAllByLabelText("Date of Birth").type("Sept 1 1940");
    cy.findByText("Next").click();

    // Now we're on page 2, so the previous button should display
    cy.findByText("Previous").click();
    cy.findByText("Step 1 of 2");
  });
});
