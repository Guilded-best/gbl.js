# gbl.js

The official javascript module of the Guilded.best website's API

# Installation
```
npm install gbl.js
```

# Docs
[Documentation](https://docs.guilded.best/libaries/javascript)

## Example
### Get user bots
```js

const gblapi = require("gbl.js")

const getuserbot = await gbl.getUserBots("mMp5QG7d")

console.log(getuserbot)

```

### Check if the user has voted for the bot
```js

const gbl = require("gbl.js")

const checkvote = await gbl.checkUserVote("ArrzxaYA","mMp5QG7d")

console.log(checkvote)

```

### Search Bot

```js

const gbl = require("gbl.js")

const search = await gbl.searchBots("gbl")

console.log(search)

```

### Get bot stats

```js

const gbl = require("gbl.js")

const botstats = await gbl.stats("ArrzxaYA")

console.log(botstats)

```
