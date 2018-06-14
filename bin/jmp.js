#! /usr/bin/env node

const LoginManager = require('../lib/login-manager');

async function main() {
  const login = new LoginManager('jmp-cli');
  let [user, email] = await login.getUserAndEmail();
  console.log(`Hello ${user}, my name is Jared!`);
}

main().catch(console.error);
