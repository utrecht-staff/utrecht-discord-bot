const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

    return message.channel.send(`Ja ${message.author}.. De bot doet het!`);

}


module.exports.help = {
    name: "test"
}