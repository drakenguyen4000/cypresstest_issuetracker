describe("Testing issue tracker features", () => {
  it("passes", () => {
    //Login
    cy.visit("https://reactissuetracker.herokuapp.com/#/");
    cy.get('[href="#/login"]').click();
    cy.get("#login-username").type("Alex");
    cy.get("#login-password").type("bug2727");
    cy.get("button").contains("Login").click();
    //Test report issue feature
    cy.get("a").contains("Report Issue").click();
    cy.get("#title").type("Home button not working");
    cy.get("#project").type("ASXi 2D Map");
    cy.get("#summary").type("Home button is reportedly not functioning for software configuration American Airlines.  This happened after they updated their Airshow software.");
    cy.get("#priority").select("High")
    cy.get("#type").select("Bug")
    cy.get("#deadline").type("2023-02-26")
    cy.get("button").contains("Submit").click()
    //Edit and make a comment
    cy.get("td").eq(1).get("a").contains("Home button not working").click()
    cy.get("button").contains("Edit").click()
    cy.get("#project").clear().type("ASXI 3D Map")
    cy.get("button").contains("Submit").click()
    cy.get('[name="post"]').type("This issue occured on our ASXi 3D, not 2D.  I just corrected the report.")
    cy.get("button").contains("Comment").click()
  });
});
