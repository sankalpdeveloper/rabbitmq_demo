var amqp = require('amqplib/callback_api');

let ch = null;
let connect = false
amqp.connect(process.env.CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
        ch = channel;
        connect = true
    });
});

module.exports.publishToQueue = async (queueName, data) => {
    if(connect){
        ch.sendToQueue(queueName, Buffer.from(data));
    }else{
        console.log("Wait Till Service Connecting........");
    }

}

process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});