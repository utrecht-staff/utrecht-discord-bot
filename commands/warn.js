const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn [user] [reden]

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!user) return message.channel.send("Geef een speler op..");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je kan geen staff-leden warnen!");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een reden op..");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };


    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });


    var warnEmbed = new discord.RichEmbed()
        .setDescription("Warn")
        .setColor("#ff6600")
        .addField("Gebruiker:", user)
        .addField("Moderator:", message.author)
        .addField("Reden:", reason);

    var warnChannel = message.guild.channels.find(`name`, "logs");
    if (!warnChannel) return message.channel.send("Maak het kanaal **logs** aan.");

    warnChannel.send(warnEmbed);


}


module.exports.help = {
    name: "warn"
}