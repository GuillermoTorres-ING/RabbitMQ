const amqp = require("amqlib");


const rabbitSettings = {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 15672,
    username: 'GuillermoTorres',
    password: 'admin1',
    vhost: '/',
    authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
}

connect();

async function connect()
{
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log("Connection Created...");
    }
    catch (err) {
        console.error(`Error -> ${err}`);
    }
}