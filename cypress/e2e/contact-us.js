/// <reference types="Cypress" />


describe("TEst Constact Us Form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get("#contact-us").click({force: true})
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Blobs")
        cy.get('[name="email"]').type("test@test.com")
        cy.get('textarea.feedback-input').type("Lalilulelo!")
        cy.get('[type="submit"]').click();
    });
    it.only("Should not be able to submit a successful via contact us form as all fields are required", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Blobs")
        cy.get('[name="email"]').type("test@test.com")
        cy.get('textarea.feedback-input').type("Lalilulelo!")
        cy.get('[type="submit"]').click();
    });
})
