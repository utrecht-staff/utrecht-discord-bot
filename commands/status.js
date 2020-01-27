const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

try {


    var help = new discord.RichEmbed()
    .setTitle("Bot status: _97%_")
    .setDescription("Bot zal 20 januari helemaal af zijn!")
    .setColor("#fc0398")

    message.author.send(help);

    message.channel.send("Je kan de status van de bot vinden in je DM!").then(message => message.delete(5000));

    message.delete((5000))




} catch (error) {
    message.channel.send("Er is wat fout gegaan.");
}



}


module.exports.help = {
    name: "status"
}