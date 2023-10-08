const { Message, Client, MessageAttachment } = require('discord.js');
const fs = require('fs').promises; // נשתמש ב-promises מ fs

module.exports = {
  name: 'close',
  /**
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    if (message.channel.parentID !== '1160255359387189484') return message.channel.send('You can only use this command in a ticket!');
    const transcriptChannel = message.guild.channels.cache.get('1160255359387189484');
    message.channel.send('Deleting ticket in 5 seconds.....');
    setTimeout(async () => {
      try {
        const ch = await message.channel.delete();
        const data = await client.ticketTranscript.findOne({ Channel: ch.id }).exec();
        if (data) {
          await fs.writeFile(`./${ch.id}.txt`, data.Content.join("\n\n"));
          transcriptChannel.send(`${message.guild.members.cache.get(ch.name).user.username}'s ticket have been closed.`);
          await transcriptChannel.send(new MessageAttachment(`./${ch.id}.txt`));
          await client.ticketTranscript.findOneAndDelete({ Channel: ch.id }).exec();
        }
      } catch (error) {
        console.error(error);
      }
    }, 5000);
  }
};
