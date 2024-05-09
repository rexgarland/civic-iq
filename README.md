# Civic IQ

A small quiz to test your knowledge of modern U.S. politics, aka participation in power. 🇺🇸🇺🇸🇺🇸

Play it here: https://rexgarland.github.io/civic-iq/website/

Code mostly forked from [8values](https://github.com/8values/8values.github.io), into the `website` folder. See `website/LICENSE`.

You win the game by sending me a PR 😉

## Install

`yarn install`

## Run

`yarn start`

## Adding questions

The purpose of each question is to increase the users' likelihood of participating in power (write their rep, make a FOIA request, attend a city hall, court hearings, etc).

Think questions about elections, where to find public information, how to run for school board, etc.

Note: we should take care not to exclude certain groups of people based on the phrasing and choice of questions.

### Question syntax

The question in `data/questions.md` are parsed into a javascript object in `website/questions.js` to be consumed by `website/quiz.html`.

The basic format is a header for the question text, a list of options, and a selected option before the correct answer (i.e. `[x]`). Additional details for the question are added in a code block immediately below it (e.g. a source link, explanation, etc). See the file for examples.

If a question cannot be parsed, it is simply ignored during the build step.
This makes it easy to check-in work-in-progress questions, e.g. if they're missing a source.
