/// <reference types="cypress" />
import cadastro from '../support/pages/cadastroFila' 

describe('Cadastro de Fila', () => {
    beforeEach(() => {
        cy.visit('/detail/bobo/home')
        cy.login()

    });
    it('Quando eu acessar o menu de gerenciamento de filas e realizar o cadastro, entao a fila deve ser cadastrada com sucesso', () => {
      
        cadastro.cadastrarComSucesso()

    })
    it('excluir a massa de teste de cadastro', () => {

        cadastro.excluirDados()
    })
});