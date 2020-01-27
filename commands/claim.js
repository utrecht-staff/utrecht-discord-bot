const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen een staff-lid kan dit.");

    return message.channel.send(`Deze ticket is geclaimd door ${message.author}, \n Alleen met toesteming van ${message.author} mag je de ticket overnemen.`);
   


}


module.exports.help = {
    name: "claim"
}