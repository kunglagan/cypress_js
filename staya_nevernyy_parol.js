
describe('Тестирование формы логина и пароля сайта staya.dog c неправильным паролем', function () {
    
    it('Открываю главную страницу сайта staya.dog', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('kunglagan@gmail.ru');
        cy.get('.auth-form > form > [type="password"]').type('777777');
        cy.get('.auth-form__submit').click();
         })
})