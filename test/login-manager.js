const chai = require('chai');
const expect = chai.expect;
const dirtyChai = require('dirty-chai');
const sinon = require('sinon');
const inquirer = require('inquirer');
const LoginManager = require('../lib/login-manager');

chai.use(dirtyChai);

describe('a login manager', () => {
  var creds;
  before(() => {
    creds = new LoginManager('jmp-cli-test');
  });
  context('with no existing credentials', () => {
    it('should prompt the user', async () => {
      sinon
        .stub(inquirer, 'prompt')
        .resolves({ user: 'Blondie', email: 'none@sergioleone.com' });
      let [user, email] = await creds.getUserAndEmail();
      expect(user).to.equal('Blondie');
      expect(email).to.equal('none@sergioleone.com');
      expect(inquirer.prompt.calledOnce).to.be.true();
      inquirer.prompt.restore();
    });
  });
  context('with existing credentials', () => {
    it('should just return them', async () => {
      let [user, email] = await creds.getUserAndEmail();
      expect(user).to.equal('Blondie');
      expect(email).to.equal('none@sergioleone.com');
    });
  });
  after(async () => {
    await creds.clearCredentials();
  });
});
