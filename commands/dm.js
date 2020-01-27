const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!user) return message.channel.send("Speler niet gevonden.");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.");




    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.").then(m => m.delete(5000));
    var dmmessage = args.join(" ");
    message.delete().catch();
    message.user.send(dmmessage);


}


module.exports.help = {
    name: "dm"
}