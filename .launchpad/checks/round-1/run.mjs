import { check, harness } from "./lib/harness.mjs";
import { entry, succeeds } from "./lib/entry.mjs";

const { test, done } = harness();
const cli = entry("node", ["cli.mjs"]);
await test("hello prints hello", async () => {
  const r = await succeeds(cli, ["hello"]);
  check(r.out.trim() === "hello", `printed ${JSON.stringify(r.out)}, expected hello`);
});
await test("world prints world", async () => {
  const r = await succeeds(cli, ["world"]);
  check(r.out.trim() === "world", `printed ${JSON.stringify(r.out)}, expected world`);
});
done();
