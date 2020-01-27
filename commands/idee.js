const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

    var idee = args.join(' ');
    if (!idee) return message.channel.send("Gebruik: !idee [Jouw idee].")

    var ideeEmbed = new discord.RichEmbed()
    .setTitle("Idee")
    .setColor("00ff00")
    .addField("Idee:", idee)
    .addField("Idee van:", message.author);

    var ideeChannel = message.guild.channels.find("name", "idee");
    if (!ideeChannel) return message.channel.send("Maak een kanaal **idee** aan.");

    message.author.send("Bedankt voor je idee, Als het een goed idee is zullen we kijken of we het gaan toepassen.");

    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

}

module.exports.help = {
    name: "idee"
}