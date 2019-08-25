const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

bot.user.setActivity(" /help | Made by Jurjen", {type: "WATCHING"});


});


bot.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    

    if( command === `${prefix}hey`){


        return message.channel.send("Hey!");

    }

    if( command === `${prefix}donate`){


        return message.channel.send("Doneer hier: https://www.tipeeestream.com/letmekillyou/donation");

    }

    if( command === `${prefix}doneer`){


        return message.channel.send("Doneer hier: https://www.tipeeestream.com/letmekillyou/donation");

    }

    if( command === `${prefix}patreon`){


        return message.channel.send("iAppreciates patreon: https://www.patreon.com/iAppreciate");

    }

    if( command === `${prefix}subscribe`){


        return message.channel.send("Subscribe: https://goo.gl/WEmyia");

    }






    if (command === `${prefix}help`) {

        var botIcon = bot.user.displayAvatarURL

        var botEmbet = new discord.RichEmbed ()
        .setDescription("Command Help")
        .setColor("#7a0074")
        .setThumbnail(botIcon)
        .addField("/Donate")
        .addField("/Patreon")
        .addField("/Subscribe")
        .addField("Total Members", message.guild.memberCount)

       return message.channel.send(botEmbet); 
    }


    if (command === `${prefix}info`) {

        var botIcon = bot.user.displayAvatarURL

        var botEmbet = new discord.RichEmbed ()
        .setDescription("Command Help")
        .setColor("#7a0074")
        .setThumbnail(botIcon)
        .addField("/Donate")
        .addField("/Patreon")
        .addField("/Subscribe")
        .addField("Total Members", message.guild.memberCount)

       return message.channel.send(botEmbet); 
    }




});




bot.login(botConfig.token);