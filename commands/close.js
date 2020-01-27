const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    const categoryId = "665885384013643795";
 
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Je kan alleen tickets sluiten.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hey, " + message.channel.name)
        .setDescription("Je ticket is afgehandeld, \n Als je een nieuwe ticket wil maken doe dan **!ticket**")
        .setFooter("ticket gesloten");
 
  
    var logChannel = message.guild.channels.find("name", "logs");
    if (!logChannel) return message.channel.send("Kanaal **logs** bestaat niet");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close"
}