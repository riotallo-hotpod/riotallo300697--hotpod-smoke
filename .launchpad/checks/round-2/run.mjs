import { check, harness } from "./lib/harness.mjs";
import { entry, succeeds } from "./lib/entry.mjs";

const { test, done } = harness();
const cli = entry("node", ["cli.mjs"]);
await test("shout prints HELLO WORLD", async () => {
  const r = await succeeds(cli, ["shout"]);
  check(r.out.trim() === "HELLO WORLD", `printed ${JSON.stringify(r.out)}, expected HELLO WORLD`);
});
done();
