import { getAllCakes, getGreeting } from '../support/app.po';

describe('all-about-cakes', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to all-about-cakes!');
  });

  it('should list all cakes', () => {

    // Function helper example, see `../support/app.po.ts` file
    // getAllCakes().;
  });
});
