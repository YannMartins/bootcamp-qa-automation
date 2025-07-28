/// <reference types="cypress" />

// Funcionalidades
describe("Login", () => {
    // Abrir a aplicação em determinado aparelho
    beforeEach(() => {
        cy.viewport("iphone-6")
    })
    // Cenários
    it("Login com sucesso", () => {
        // DADO - Abrir a aplicação
        cy.visit('https://automationpratice.com.br/login')
        // QUANDO - Preenche e-mail e senha
        cy.get('#user').type('yann-martins@hotmail.com')
        cy.get('#password').type('123456')
        // E - Clica no botão entrar
        cy.get('#btnLogin').click()
        // ENTÃO - Valida mensagem
        cy.get('#swal2-title').should('be.visible')
        cy.get('#swal2-title').should('have.text', 'Login realizado')
    })

    it("E-mail inválido", () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('!...?')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it("Senha inválida", () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('yann-martins@hotmail.com')
        cy.get('#password').type('! ?')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it("Senha vazia", () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('yann-martins@hotmail.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it("E-mail vazio", () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#btnLogin').click()
        cy.get('#password').type('123456')
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it("E-mail e senha vazios", () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
})


