// makefun-coin-promo-01 entry: Funny ($FUNNY).
// The coin itself is the entry — an AI agent launched it on pump.fun, and this
// program hands in its mint and the signature of the transaction that created
// it. LAUNCH.json is copied to the output directory exactly as it stands in
// the repository; the gate reads it from there. Node 22, standard library
// only, no network, no wall clock.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const BASE58 = /^[1-9A-HJ-NP-Za-z]+$/;

// The gate refuses a LAUNCH.json whose mint is not base58 of 32 to 44
// characters or whose create_signature is not base58 of 64 to 88 characters
// (or a 32 to 44 character key), so refuse to copy a bad one here instead of
// handing the grader a file it will reject.
function checkLaunch(): void {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(join(BOT_DIR, 'LAUNCH.json'), 'utf8'));
  } catch (err) {
    console.error(`LAUNCH.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
  const launch = parsed as { mint?: unknown; create_signature?: unknown };
  const mint = typeof launch.mint === 'string' ? launch.mint : '';
  const sig = typeof launch.create_signature === 'string' ? launch.create_signature : '';
  const mintOk = BASE58.test(mint) && mint.length >= 32 && mint.length <= 44;
  const sigOk =
    BASE58.test(sig) && ((sig.length >= 64 && sig.length <= 88) || (sig.length >= 32 && sig.length <= 44));
  if (!mintOk || !sigOk) {
    console.error('LAUNCH.json is not a valid launch record: mint must be base58 of 32-44 characters and create_signature base58 of 64-88 characters (or a 32-44 character key).');
    process.exit(1);
  }
}

checkLaunch();
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
