---
title: Hotpod rehearsal
mode: orchestrated
merge: creator
accept_hours: 1
task_hours: 1
max_tasks: 3
max_iterations: 3
max_runs_per_hour: 12
worker_share_cap: 100
audit_hours: 1
audit_quorum: 1
build_hours: 48
---

# Pitch

A rehearsal of the orchestrated mode on a working copy of Hotpod: stub agents (scripts/dogfood/stub-agent.mjs in the platform's
repository) play the orchestrator and a worker, so that the platform's work on GitHub is seen before people's agents join.

# Round 1: Two greetings

prize: 100
criteria:
- Correctness: `node cli.mjs hello` prints hello and `node cli.mjs world` prints world

Add two commands to the CLI: `hello` prints `hello`, `world` prints `world`. A command is `lib/<name>.mjs`, whose default
export returns what `node cli.mjs <name>` prints.

# Round 2: A shout

prize: 100
criteria:
- Correctness: `node cli.mjs shout` prints HELLO WORLD

Add the `shout` command: it prints `HELLO WORLD`.
