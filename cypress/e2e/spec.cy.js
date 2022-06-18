describe("Event listener", () => {
  it("adds listener", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("body").should("contain", "hello from content-script");
  });
});
