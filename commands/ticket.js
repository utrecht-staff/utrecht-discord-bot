const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "665885384013643795";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send("Je hebt al een ticket gemaakt.");

            bool = true;

        }

    });

    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hey, " + message.author.username)
        .setFooter("ticket wordt aangemaakt");

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { 

        createdChan.setParent(categoryId).then((settedParent) => { 

            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new discord.RichEmbed()
                .setTitle("Hey, " + message.author.username.toString())
                .setDescription("Zet hier je vraag of klacht.");

            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Er is iets fout gegaan.");
        });

    }).catch(err => {
        message.channel.send("Er is iets fout gegaan.");
    });

}

module.exports.help = {
    name: "ticket"
}