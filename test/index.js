const { checkUserVote } = require("gbl.js")

async function run() {
const checkvote = await checkUserVote("ArrzxaYA", "mMp5QG7d")

console.log(checkvote)
}
run();