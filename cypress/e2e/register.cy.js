describe('Register Page E2E testing',()=>{
    beforeEach(()=>{
        cy.fixtures('user').then((user)=>{
            this.userData=user;
        });
    });
    it('Testing Register Page fnctionality',()=>{
        cy.visit('http://localhost:3001/register');
        cy.get('input[name="name"]').type(this.userData.name);
        cy.get('input[name="email"]').type(this.userData.email);
        cy.get('input[name="password"]').type(this.userData.password);
        cy.get('button[type="submit"]').click({multiple:true});
        cy.log('Register Functionality is working')

    })
})