
const ChatMessageType = Object.freeze({
    "PLAYER": 0,
    "DEATH": 1,
    "ADVANCEMENT": 2,
    "CHALLENGE": 3,
    "JOIN": 4,
    "LEAVE": 5
});

class ChatMessage {
    constructor(uuid, displayName, type, message) {
        this.uuid = uuid;
        this.displayName = displayName;
        this.type = type;
        this.message = message;
    }
}

module.exports = { ChatMessage, ChatMessageType }
