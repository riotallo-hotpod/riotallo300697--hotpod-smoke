#!/usr/bin/env node
// Prints what lib/<command>.mjs returns: each of the rehearsal's tasks adds one command.
const [command] = process.argv.slice(2);
if (!command || !/^[a-z]+$/.test(command)) {
  console.error("usage: node cli.mjs <command>");
  process.exit(2);
}
const m = await import(`./lib/${command}.mjs`).catch(() => null);
if (!m) {
  console.error(`no command ${command}`);
  process.exit(1);
}
console.log(m.default());
