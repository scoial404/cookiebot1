const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  // כאן תוכל להגדיר את התפקיד "מאומת" שברצונך להוסיף למשתמש
  const verifiedRoleName = 'Member';

  // בדוק אם המשתמש כבר מאומת
  if (message.member.roles.cache.some(role => role.name === verifiedRoleName)) {
    return message.reply('אתה כבר מאומת!');
  }

  // כאן תוכל להוסיף בדיקות נוספות אם הן נדרשות

  // אם המשתמש לא מאומת, הוסף לו את התפקיד
  const verifiedRole = message.guild.roles.cache.find(role => role.name === verifiedRoleName);
  if (verifiedRole) {
    try {
      await message.member.roles.add(verifiedRole);
      message.reply('יש לך רול ממבר בהצלחה!');
    } catch (err) {
      console.error(err);
      message.reply('אנו לא יכולים למאומת אותך כרגע, יש לנסות שוב מאוחר יותר.');
    }
  } else {
    message.reply('לא נמצא תפקיד "Member" בשרת, יש ליצור אותו תחילה.');
  }
};
