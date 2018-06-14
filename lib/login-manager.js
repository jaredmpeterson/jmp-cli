const Configstore = require('configstore');
const inquirer = require('inquirer');

class LoginManager {
  constructor(name) {
    this.conf = new Configstore(name);
    this.service = name;
  }

  async getUserAndEmail() {
    let user = this.conf.get('user');
    if (user) {
      let email = await this.conf.get('email');
      return [user, email];
    } else {
      let answers = await inquirer.prompt([
        { type: 'input', name: 'user', message: 'What is your name?' },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        }
      ]);
      this.conf.set('user', answers.user);
      this.conf.set('email', answers.email);
      return [answers.user, answers.email];
    }
  }
}

module.exports = LoginManager;
