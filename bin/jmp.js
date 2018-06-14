#! /usr/bin/env node

const program = require("commander")
const pkg = require("../package.json")

program
  .version(pkg.version)
  .command("resume", "print json resume to your terminal")
  .command("login", "personalize your experience")
  .parse(process.argv)
