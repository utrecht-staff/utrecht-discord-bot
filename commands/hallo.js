const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {


    return message.channel.send(`Hoi ${message.author}`);

}


module.exports.help = {
    name: "hallo"
}