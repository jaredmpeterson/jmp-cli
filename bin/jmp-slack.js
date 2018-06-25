#! /usr/bin/env node

const program = require("commander")
const { IncomingWebhook } = require("@slack/client")
const url =
  "https://hooks.slack.com/services/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"
const webhook = new IncomingWebhook(url)

program.on("--help", function() {
  console.log("")
  console.log("  Example:")
  console.log("")
  console.log("    $ jmp slack 'Hello, I like your app.'")
  console.log("")
})

program
  .arguments("<message>")
  .description("Send me a message via Slack")
  .parse(process.argv)

var msg = program.args

var msgStr = String(msg)

if (!msg.length) {
  console.error("message required")
  program.help()
  process.exit(1)
}
// Send simple text to the webhook channel
webhook.send(msgStr, function(err, res) {
  if (err) {
    console.log("Error:", err)
  } else {
    console.log()
    console.log("Message sent!")
  }
})
