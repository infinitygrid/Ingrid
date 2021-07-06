
const Discord = require('discord.js');
const { ChatMessageType, ChatMessage } = require('./chatMessage.js');
const client = new Discord.Client();
let webhook, config;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

module.exports = {

    config, webhook,

    start: (token, opts) => {
        client.login(token);
        config = opts;
        webhook = new Discord.WebhookClient(config.livechat.webhookId, config.livechat.webhookToken);
    },

    forwardMessage: (chatMessage) => {
        console.log(chatMessage.type)
        switch (chatMessage.type) {
            case '0': // Player Message
                sendPlayerMessage(chatMessage);
                break;
        }
    }

}

let sendPlayerMessage = (chatMessage) => {
    webhook
        .send(chatMessage.message, {
            username: chatMessage.displayName,
            avatarURL: `https://crafatar.com/renders/head/${chatMessage.uuid}?overlay`,
            disableMentions: 'all'
        })
        .catch((err) => console.log(err));
}
