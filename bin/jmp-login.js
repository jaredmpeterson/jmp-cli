const program = require("commander")
const pkg = require("../package.json")

const LoginManager = require("../lib/login-manager")

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  async function main() {
    const login = new LoginManager("jmp-cli")
    let [user, email] = await login.getUserAndEmail()
    console.log(`Hello ${user}, my name is Jared!`)
  }

  main().catch(console.error)
}
