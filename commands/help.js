const discord = require("discord.js");

module.exports.run  = async (bot, message, args) => {

try {


    var help = new discord.RichEmbed()
    .setTitle("Commands:")
    .setDescription("**Speler commands:** \n !hallo - stuurt Hallo terug. \n !ip - Stuurt het IP van de minecraft server. \n !serverinfo - stuurt informatie over de server. \n !botinfo - Stuurt informatie over de bot. \n !idee[Jouw idee!] - Vertel een idee en misschien doen we het! \n !review[sterren][mening] - Schrijf wat je van de server vind. \n!status - Stuurt de status in je DM. \n !help - Stuurt de commands in de DM. \n\n **Ticket commands:**  \n !ticket - Maak een ticket aan. \n **(_Staff commands ticket_)** \n !close - Sluit de ticket. !claim - Claim de ticket \n !claim2 - Neem de ticket over. \n\n **Muziek commands:** (_Niet af._) \n _SOON_ \n\n **Staff commands:** \n !kick - Kickt een speler \n !ban - Bant een speler. \n !warn - Warnt een speler. \n !say [bericht] - Zegt een bericht die jij met de bot wil verzenden. \n !clear [Aantal] - Verwijderd aantal opgegeven berichten. \n _De rest komt nog_  ")
    .setColor("#07ff87")
    .setFooter("Play.ttcraft.eu");

    message.author.send(help);

    message.channel.send("De commands staan in je DM.");




} catch (error) {
    message.channel.send("Er is wat fout gegaan.");
}



}


module.exports.help = {
    name: "help"
}