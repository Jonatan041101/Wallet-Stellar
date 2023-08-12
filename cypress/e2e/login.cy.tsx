const buttonText = 'Conectar con una clave secreta';
const textLiLoginConfirm =
  'Copiar y pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas que pueden provocar la pérdida de fondos.';
const secretKey = 'SDMKSLMZTXCXG4OAJVZKISPJ4NML2H23DWNXZI4XJBG3L2PNQ4XJYRJ';
describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', buttonText).click();
    cy.get('.check__input').as('checkboxInput');
    cy.contains('li', textLiLoginConfirm).as('warning');
  });

  it('Should render the button text correctly', () => {
    cy.contains('button', buttonText).should('be.visible');
  });

  it('Should call the handleClick function when the button is clicked and close when the cross is clicked', () => {
    cy.get('.modal__btn').click();
    cy.get('@warning').should('not.exist');
  });

  it('Should modal close when the cancel button is clicked', () => {
    cy.get('@warning').should('exist');
    cy.contains('button', 'Cancelar').click();
    cy.get('@warning').should('not.exist');
  });

  it('Should give an error message when clicking continue regardless of the risks', () => {
    cy.get('@checkboxInput').should('exist');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist').click();
    cy.contains('Lee con atención').should('be.visible');
  });

  it('Should when clicking on continue taking into account the risks with the input in check show the login modal', () => {
    cy.get('@checkboxInput').should('exist');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('@checkboxInput').check();
    cy.get('@checkboxInput').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
  });

  it('Should login modal close when I click the cross button', () => {
    cy.get('@checkboxInput').should('exist');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('@checkboxInput').check();
    cy.get('@checkboxInput').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('.modal__btn').click().as('buttonClose');
    cy.get('@buttonClose').should('not.exist');
  });

  it('Should log in by entering the secret key and changing to the wallet path', () => {
    cy.get('@checkboxInput').should('exist');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('@checkboxInput').check();
    cy.get('@checkboxInput').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(Cypress.env('secret_key'));
    cy.get('button[class="button button__complete"]').click();
    cy.wait(3000);
    cy.contains('h3', 'Su clave pública Stellar').should('be.visible');
  });

  it('Should log in by entering the secret key and changing to the wallet path', () => {
    cy.get('@checkboxInput').should('exist');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('@checkboxInput').check();
    cy.get('@checkboxInput').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(Cypress.env('secret_key'));
    cy.get('button[class="button button__complete"]').click();
    cy.wait(3000);
    cy.contains('h3', 'Su clave pública Stellar').should('be.visible');
  });

  it('Should give an error message when entering an invalid secret key', () => {
    cy.get('@checkboxInput').should('exist');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('@checkboxInput').check();
    cy.get('@checkboxInput').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(secretKey);
    cy.get('button[class="button button__complete"]').click();
    cy.wait(1000);
    cy.contains('La llave secreta que ha ingresado es incorrecta');
  });

  it('Should show a message that the account has been activated when clicking on the activate account button', () => {
    cy.get('@checkboxInput').should('exist');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist').as('buttonContinue');
    cy.get('@checkboxInput').check();
    cy.get('@checkboxInput').should('be.checked');
    cy.get('@buttonContinue').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(Cypress.env('secret_key'));
    cy.get('button[class="button button__complete"]').click();
    cy.wait(3000);
    cy.contains('h3', 'Su clave pública Stellar').should('be.visible');
    cy.contains('button', 'Fondear Cuenta').should('exist').click();
    cy.wait(6000);
    cy.contains('La cuenta ha sido activada').should('be.visible');
  });
});
