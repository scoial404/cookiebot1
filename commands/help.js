exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.embedColor)
        .setTitle(client.config.botName)
        .setDescription(`לעוד מידע תפנו אל - <@${client.config.ownerID}>`);

    // קטגוריה "פקודות הגרלות"
    embed.addField(`**${client.config.giveawayEmoji} פקודות הגרלות**`, `**${client.config.prefix}create**: \`יצירת ההגרלה\`\n**${client.config.prefix}list**: \`רשימת ההגרלות\`\n**${client.config.prefix}reroll [message id]**: \`שולח זוכה אחר להגרלה.\`\n**${client.config.prefix}edit [message id] [prize/winners] [new value]**: \`משנה את פרטי ההגרלה.\`\n**${client.config.prefix}end [message id]**:\` גומר את ההגרלה ומביא זוכה מוקדם יותר מהזמן שהגדרת.\`\n**${client.config.prefix}delete [message id]**: \`מוחק את ההגרלה\`\n`);

    // קטגוריה "פקודות טיקט"
    embed.addField(`** <:ticket:1160204128337793154> פקודות טיקטים**`, `**${client.config.prefix}ticket**: \`פתיחת טיקט\`\n**${client.config.prefix}close**: \`לסגור את הטיקט\``);

    // קטגוריה "verify"
    embed.addField(`**פקודות verify**`, `**${client.config.prefix}verify**: \`ביצוע אימות\``);

    message.channel.send(embed);
};
