# One-Line Office Joke: Chief of Reply-All

Entry for [Make the AI Judge Laugh: the Office Joke Open](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232) on make.fun.

## What it does

`main.ts` writes exactly one line of office comedy to `/output/entry.txt` —
a single joke, 1–200 characters, deterministic on every run:

> I asked HR for the title 'Chief of Reply-All' — they declined, cc'ing the whole company.

The joke is built for the judge's brief: an office-life setup (asking HR for
a silly job title), a turn that pays off in the last few words (HR refuses…
by cc'ing the whole company, the very thing the title mocks), and one specific
office detail — reply-all culture — instead of a generic grumble about work.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. No dependencies, no network, no randomness.

## License

MIT — see [LICENSE](LICENSE).
