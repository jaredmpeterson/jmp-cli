const program = require("commander")
const pkg = require("../package.json")
const { readFileSync, createReadStream } = require("fs")
const { resolve } = require("path")
const out = process.stdout
const arg = process.argv[2]
const me = resolve(__dirname, `../jmp.json`)

program.option("-c, --color", "print in color").parse(process.argv)

// rainbow -- see npm.im/rainbowify
const gencolors = () => {
  const colors = []
  for (let i = 0; i < 6 * 7; i++) {
    const pi3 = Math.floor(Math.PI / 3),
      n = i * (1.0 / 6),
      r = Math.floor(3 * Math.sin(n) + 3),
      g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3),
      b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3)
    colors.push(36 * r + 6 * g + b + 16)
  }
  return colors
}
const rainbowColors = gencolors()
let colorIndex = 0
const col = str => {
  const color = rainbowColors[colorIndex % rainbowColors.length]
  colorIndex += 1
  return `\u001b[38;5;${color}m${str}\u001b[0m`
}

// runs the json through rainbow bit, writes to stdout
const colorize = () => {
  console.log("\x1Bc")
  readFileSync(me)
    .toString()
    .split("\n")
    .map(a => out.write(col(a) + "\n"))
}

if (program.color) {
  colorize()
} else {
  createReadStream(me).pipe(out)
}
