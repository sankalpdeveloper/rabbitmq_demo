require('dotenv').config()

const amqp = require('amqplib/callback_api');

const CONN_URL = process.env.CONN_URL

amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, ch) {
        ch.consume('user-message', function (msg) {
            try {
                const Message = JSON.parse(msg.content.toString())
                console.log("Message", Message);
            } catch (error) {

            }
        }, { noAck: true }
        );
    });
});