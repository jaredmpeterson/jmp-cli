#! /usr/bin/env node

const program = require("commander")
const pkg = require("../package.json")

program
  .version(pkg.version)
  .description("jmp-cli by Jared M. Peterson")
  .command("resume", "output json resume to your terminal")
  .command("slack <message>", "send me a message via Slack")
// .command("login", "personalize your experience") namespace login

program.parse(process.argv)
