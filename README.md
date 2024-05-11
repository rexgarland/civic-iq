# Civic IQ

A small quiz to test your knowledge of modern U.S. politics, a.k.a. participation in power. We the people! 🇺🇸🇺🇸🇺🇸

[Take the quiz!](https://rexgarland.github.io/civic-iq/website/)

## Run

```
yarn install
yarn start
```

## How to add/edit a question

You can add more questions by simply editing `data/questions.md` and then running `yarn build` to render them into `website/questions.js`.

Here's a simple example of the syntax:

```md
# How many people represent you in Congress?
- 1
- [x] 3
- 5
- 535
```

Check out that file for more examples. It's also good to include sources below the question in code marks.

And feel free to add work-in-progress there as well, since it won't be parsed until the question is "staged" by adding the h1 header (`# `).

## Writing questions

The intended purpose of this quiz is to get people more confident to participate in power (e.g. write their rep, make a FOIA request, attend a city hall, etc).

The only bias should be toward citizen participation in power, collective or individual. Any bias toward a particular political party / ideology should be avoided, so please help out by reporting it (you can submit an issue or just ping me).

Note: we should be careful not to exclude any protected groups based on phrasing or choice of questions.

## Acknowledgements

- The `website` folder started as a clone of [8values](https://github.com/8values/8values.github.io). A big thank you to them for writing such readable code, with essentially no setup needed. See `website/LICENSE`.
- A special thanks to all the great resources provided by `chaserx` in [awesome-citizen](https://github.com/chaserx/awesome-citizen)