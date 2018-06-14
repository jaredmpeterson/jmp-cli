#! /usr/bin/env node

const program = require("commander")
const pkg = require("../package.json")
const login = require("../commands/login")

program
  .version(pkg.version)
  .command("login", "Personalize your experience using jmp-cli")
  .parse(process.argv)
