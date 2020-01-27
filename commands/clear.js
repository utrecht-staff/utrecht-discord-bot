const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.");
    if(!args[0]) return message.channel.send("Geef een aantal op..");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete(5000));
    });

}


module.exports.help = {
    name: "clear"
}