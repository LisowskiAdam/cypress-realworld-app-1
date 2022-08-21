export default class BankAccountsPage {
    clickCreate() {
        cy.getBySel("bankaccount-new").click();
    }

    verifyEmptyBankNameAlert() {
        cy.getBySelLike("bankName-input").type("The").find("input").clear().blur();
        cy.get("#bankaccount-bankName-input-helper-text")
            .should("be.visible")
            .and("contain", "Enter a bank name");
    }

    verifyTooShortBankNameAlert() {
        cy.getBySelLike("bankName-input").type("The").find("input").blur();
        cy.get("#bankaccount-bankName-input-helper-text")
            .should("be.visible")
            .and("contain", "Must contain at least 5 characters");
    }

    verifyEmptyRoutingNumberAlert() {
        cy.getBySelLike("routingNumber-input").type("12345678").find("input").blur();
        cy.get("#bankaccount-routingNumber-input-helper-text")
            .should("be.visible")
            .and("contain", "Must contain a valid routing number");
        cy.getBySelLike("routingNumber-input").find("input").clear();
    }

    verifyInvalidRoutingNumberAlert() {
        cy.getBySelLike("routingNumber-input").find("input").focus().blur();
        cy.get(`#bankaccount-routingNumber-input-helper-text`)
            .should("be.visible")
            .and("contain", "Enter a valid bank routing number");
    }

    verifyEmptyAccountNumber() {
        
    }
}
