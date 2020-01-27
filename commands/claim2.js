const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen een staff-lid kan dit.");

    return message.channel.send(`Deze ticket is overgenomen door ${message.author}.`);
   


}


module.exports.help = {
    name: "claim2"
}