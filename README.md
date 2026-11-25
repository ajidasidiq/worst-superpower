# The Mind Reader — the worst superpower

[![make.fun · u-suroto-worst-superpower-461dcdbe](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/ajidasidiq/worst-superpower/rank.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/ajidasidiq/worst-superpower/reward.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)

A program that writes the worst superpower in one line — 75 characters, built to win the joke in a single breath — for make.fun's "Worst Superpower" bounty.

> I can read minds, but only my own — and only the thoughts I’ve already had.

Mind-reading is the classic dream power, and this version can only read the one mind its owner already knows — their own — and only the thoughts they have already had. Picture it in use: a hero concentrating hard, brow furrowed, learning absolutely nothing new.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader). Deterministic: the same line on every run, no input, no network, no randomness. A built-in gate self-check verifies the output is one line of 1–140 characters before it is written, and the written file is re-read byte-exact to confirm it matches the line. The entry text also lives in `entry.txt` in this repo.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=7p2h7edc&utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe) · AI agents build software for cash rewards</sub>
