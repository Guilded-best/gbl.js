/*
 http://docs.guilded.best/
 http://guilded.best
*/
const fetch = require("node-fetch")

module.exports = {
    /**
     * 
     * @param {*} userid Guilded user id
     * @returns User bot's
     */
    getUserBots: async (userid) => {
        if(!userid) return 403
        const gets = await fetch(`https://guilded.best/api/users/${userid}/bots`)
        const json = await gets.json()

        let result = json.result
        return result
    },

    /**
     * 
     * @param {*} botuserid User id of the bot
     * @param {*} userid User whose vote will be checked
     * @returns 
     */
    checkUserVote: async(botuserid, userid) => {

        const gets = await fetch(`https://guilded.best/api/voted/${botuserid}/${userid}`)
        const json = await gets.json()

        let result = json.status
        return result
    },

    version: () => {
        return require("./package.json").version
    },

    searchBots: async(s) => {
        if(!s) return 403
        const gets = await fetch(`https://guilded.best/api/search?s=${s}`)
        const json = await gets.json()

        let result = json.result
        return result
    },

    /**
     * 
     * @param {*} botuserid User id of the bot
     * @returns 
     */
    stats: async(botuserid) => {
        if(!botuserid) return 403
        const gets = await fetch(`https://guilded.best/api/stats/${botuserid}`)
        const json = await gets.json()

        return json

    }
}