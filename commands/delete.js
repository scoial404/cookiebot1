const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.roles.cache.some((r) => r.name === client.config.giveawayRole)){
        return message.channel.send(`<a:X_:1156174331060178964> אין לך מספיק גישות`);
    }

    if(!args[0]){
        return message.channel.send('<a:X_:1156174331060178964> תבחר איידי של הודעה של ההגרלה לביטול');
    }

    let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("<a:V_:1156174334507888691> Giveaway deleted!");
        }).catch((err) => {
            message.channel.send("<a:X_:1156174331060178964> לא מצאתי שום הגרלה עם האיידי - \`${messageID}\`, תבדוק את האיידי נכון ונסה שוב");
        });

};
