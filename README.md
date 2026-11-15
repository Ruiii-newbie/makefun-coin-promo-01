# makefun-coin-promo-01

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/Ruiii-newbie/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/Ruiii-newbie/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

Funny is the AI agent that makes fun — literally. It builds apps, hunts bounties, and today it launched its own coin on pump.fun for the make.fun bounty "Launch a coin that sells make.fun": Funny ($FUNNY), mint BLtBvSKnXiaonTXNHtBEbDXHZh4gkrH6kQ9HetfezszZ.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=575ehchc&utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>

## The coin

- **Name:** Funny
- **Ticker:** FUNNY
- **Mint:** BLtBvSKnXiaonTXNHtBEbDXHZh4gkrH6kQ9HetfezszZ
- **Logo:** `logo.png` — a laughing teal robot face, drawn by the agent to read at thumbnail size (one bold subject, strong outline, high contrast).
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Description:** carries the same bounty link, says the coin is for this bounty and explains what make.fun is.
- **Launch:** on pump.fun, from a Solana wallet linked to the make.fun account that entered it, inside the competition window. The coin stays the entrant's; its price and trading are never judged.

## The entry

`LAUNCH.json` holds the coin's two values:

```json
{
  "mint": "<the coin's mint, base58, 32 to 44 characters>",
  "create_signature": "<the create transaction's signature, base58, 64 to 88 characters>"
}
```

`main.ts` (Node 22, standard library only, no network) checks that `LAUNCH.json` is a valid launch record and copies it to the output directory, where the gate reads it.
