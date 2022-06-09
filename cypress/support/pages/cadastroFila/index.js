/* eslint-disable cypress/no-unnecessary-waiting */
const el = require('./elements').ELEMENTS

class Filas {

  cadastrarComSucesso () {
    
    cy.wait(5000)
    cy.get(el.menuAtendimento).click()
    cy.get(el.menuFila).click()
    cy.get(el.btnCriarFila)
    .find('[class="button button__primary button--size-standard--icon button--size-icon--left"]')
    .click({force: true})
    cy.get(el.nomeFila)
    .find('[placeholder="Nome da fila"]')
    .type("fila 1" ,{force: true})
    cy.get(el.btnCadastrar)
    .find('[class="button button__primary button--size-standard"]')
    .click({force: true})

    cy.url().should('contain', 'fila1')

  }

  excluirDados(){

    cy.wait(5000)
    cy.get(el.menuAtendimento).click()
    cy.get(el.menuFila).click() 
    cy.get(el.btnExcluir)
    .find('[class="mt2 hydrated"]')
    .click({force: true})    
    cy.get(el.btnConfirmarExclusao)
    .find('[class="button button__secondary button--size-standard"]')
    .click({force: true}) 
    
    cy.get(el.confirmarExclusao).should('not.exist')


  }
}

export default new Filas()
