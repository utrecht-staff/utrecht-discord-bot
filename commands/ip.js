const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

    var ip = new discord.RichEmbed()
    .setTitle("Server IP: (_Server is nog dicht._)")
    .setDescription("~Play.ttcraft.eu~")
    .setColor("#07ff87")
    .setFooter("De server is nog dicht!");

    message.channel.send(ip);

}

module.exports.help = {
    name: "ip"
}