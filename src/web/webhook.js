const ingrid = require('../ingrid/ingrid');

const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-formbody'));
const { ChatMessage } = require('../ingrid/chatMessage.js');

fastify.post('/minecraft/chat', async (req, rep) => {
    let body = req.body;
    ingrid.forwardMessage(new ChatMessage(body.uuid, body.displayName, body.type, body.message));
    return req.body;
})

module.exports = {

    listen: async (port) => {
        try {
            await fastify.listen(port)
          } catch (err) {
            fastify.log.error(err)
            process.exit(1)
          }
    }

}
