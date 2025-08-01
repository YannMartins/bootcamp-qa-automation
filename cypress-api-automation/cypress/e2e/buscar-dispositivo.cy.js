/// <reference types="cypress"/>

describe("Buscar dispositivos", () => {

    it("Buscar dispositivo específico", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/7"
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("7")
        })
    })

    it("Buscar dispositivo inexistente", () => {
        cy.request({
            failOnStatusCode: false,
            method: "GET",
            url: "https://api.restful-api.dev/objects/-"
        }).then((response) => {
            expect(response.status).to.equal(404)
            expect(response.body.error).to.equal("Oject with id=- was not found.")
        })
    })

    it("Cadastrar dispositivo", () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects",
            body: {
                "name": "Dispositivo do Yann",
                "data": {
                    "year": 2001,
                    "price": 9999.99,
                    "CPU model": "Intel Core i99",
                    "Hard disk size": "100 TB"
                }
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.contain('Yann')
        })
    })

})