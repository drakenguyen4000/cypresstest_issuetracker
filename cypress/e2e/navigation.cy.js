describe('Testing navigations', () => {
  it('passes', () => {
    //Login 
    cy.visit('https://reactissuetracker.herokuapp.com/#/')
    cy.get('[href="#/login"]').click();
    cy.get("#login-username").type("Alex")
    cy.get("#login-password").type("bug2727")
    // cy.get("button.btn-secondary").click()
    cy.get("button").contains("Login").click()
  })
})