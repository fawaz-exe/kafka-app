// import { Kafka } from "kafkajs";
import kafka from "./client.js";


async function init(){
    const admin = kafka.admin();
    console.log('Admin Connecting...');
    admin.connect();
    console.log('Admin Connecting Success');

    console.log('Creating Topic [model-update]')
    await admin.createTopics({
        topics:[{
            topic: 'model-update',
            numPartitions: 2,

        }]
    })
    console.log('Topics created success [model-update]');

    console.log('Disconnecting Admin..');
    await admin.disconnect();
}

init();