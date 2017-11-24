const Weixinbot = require('../weixinbot');

const bot = new Weixinbot();

bot.on('qrcode', console.log);

bot.on('friend', (msg) => {
  console.log(msg.Member.NickName + ': ' + msg.Content);
  bot.sendText(msg.FromUserName, 'Got it');
});

bot.run();
