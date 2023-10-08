const { Client, Message } = require('discord.js')

module.exports = {
    name : 'ticket',
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {
        const ch = message.guild.channels.cache.find(ch => ch.name === message.author.id)
        if(ch) return message.channel.send('יש לך כבר טיקט פתוח')
        message.guild.channels.create(`${message.author.id}`, {
            type : 'text',
            parent : '1160255359387189484',
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
            ]
        }).then(async channel=> {
            message.reply(`תעבור לחדר <#${channel.id}> כדי לראות את הטיקט`)
            channel.send(`${message.author}, בטיקט החדש שלך, אנא פרט את הבעיה שלך ונשתדל לטפל בה בהקדם האפשרי. :tools::bulb:\n\nאנא שים לב:\n:no_entry_sign: אנא אל תתייג איש צוות או רול מסוים.\n⌛️ אנא המתן בסבלנות עד שצוות התמיכה יגיע לטיפול בטיקט שלך.\n:briefcase: בינתיים, אם יש לך מידע נוסף או שאלות נוספות, אנא ציין אותם בטיקט כדי שנוכל לספק לך עזרה מיטבית.\n\nתודה רבה על ההבנה והסבלנות! :pray::sparkles:`)
        })
    }
}
