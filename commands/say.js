const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.").then(m => m.delete(5000));
    var botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);


}


module.exports.help = {
    name: "say"
}