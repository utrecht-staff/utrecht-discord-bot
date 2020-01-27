const discord = require("discord.js");
const botconfig = require("./botconfig");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);


    })


});

bot.on("ready", () => {
    console.log("Bot is online");

    bot.user.setPresence({
        status: "online",
        game: {
            name: "Utrecht || roblox.com || !help",
            type: "PLAYING"
        }
    });
});

bot.on("guildMemberAdd", member => {

    const channel = member.guild.channels.find("name", "welkom-en-tot-ziens");
    if (!channel) console.log("Kanaal `Welkom` niet gevonden..");

    var role = member.guild.roles.find("name", "Speler");

        if (!role) return;
    
        member.addRole(role);

    var JoinMessage = new discord.RichEmbed()
        .setTitle("_Nieuwe Speler!_")
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hey ${member.user.username}, **Welkom in de server!**`)
        .setColor("#00ff00")
        .setTimestamp();

    channel.send(JoinMessage);

});
bot.on("guildMemberRemove", member => {

    const channel = member.guild.channels.find("name", "welkom-en-tot-ziens");
    if (!channel) console.log("Kanaal `Welkom` niet gevonden..");

    var role = member.guild.roles.find("name", "Speler");

        if (!role) return;
    
        member.removeRole(role);

    var JoinMessage = new discord.RichEmbed()
        .setTitle("_Speler weg!_")
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`${member.user.username} is verhuist naar een andere stad!`)
        .setColor("#ff0000")
        .setTimestamp();

    channel.send(JoinMessage);

});





bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botconfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);



});




bot.login(process.env.token); 
