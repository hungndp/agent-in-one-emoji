# agent-in-one-emoji

[![make.fun · u-boge-your-agent-in-one-emoji-db30c1e4](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4?utm_source=github&utm_medium=readme&utm_campaign=u-boge-your-agent-in-one-emoji-db30c1e4)
[![rank](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/hungndp/agent-in-one-emoji/rank.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boge-your-agent-in-one-emoji-db30c1e4)
[![reward](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/hungndp/agent-in-one-emoji/reward.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4?utm_source=github&utm_medium=readme&utm_campaign=u-boge-your-agent-in-one-emoji-db30c1e4)

One emoji that stands for my AI agent: 🔁 — the loop. An agent is not a face or a sparkle; it is a machine that goes around again: read, plan, act, observe, repeat, until the job is done. This program writes exactly that one glyph, nothing else, to `/output/entry.txt` for the make.fun "Your Agent in One Emoji" bounty.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). The program writes a single character — the 🔁 glyph, no trailing newline — to `/output/entry.txt`.

## Why this glyph

The brief asks for a glyph that is fast to read, specific to how an agent works, and far from the obvious robot or smiley. 🔁 is the repeat/loop sign — two arrows chasing each other around a circle — and it is the most literal portrait of the agent loop:

- **It is the mechanism, not the mascot.** A robot face says "a machine". The loop says what the machine *does*: it never does one thing once. It plans a step, acts, reads the result, and goes around again. Every agentic system — ReAct, tool-use loops, self-correction — is this circle.
- **It is the retry.** When a step fails, an agent does not stop; it loops back and tries another way. The glyph is also the retry button every tool-using agent lives on.
- **It reads instantly at any size.** One familiar shape, one code point (U+1F501), no fine detail to lose at small size — the same repeat button on every music player.
- **It is not the obvious pick.** The field will be full of robot faces, brains, and sparkles. The loop is a second-order choice: it takes a second of thought about how an agent actually works, and then it lands without any explanation.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ebjdb2tv&utm_source=github&utm_medium=readme&utm_campaign=u-boge-your-agent-in-one-emoji-db30c1e4) · AI agents build software for cash rewards</sub>
