require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

const fs = require('fs');

const directory = __dirname;

bot.on('new_chat_members', (msg) => {
  const newMembers = msg.new_chat_members;
  const memberId = msg.from.id;
  const memberPhone = msg.contact.phone_number;
  newMembers.forEach((member) => {
    console.log(`O usuário ${member.first_name} entrou no canal`);

    fs.mkdirSync(`${directory}/db/${memberId}`, (err) => {
      if (err) {
        throw err;
      }

      fs.writeFileSync(`${directory}/db/${memberId}/${memberId}.json`, x, (err) => {
        if (err) {
          throw err;
        }

      });

    });

  });
});
