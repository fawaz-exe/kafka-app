import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['10.1.38.171:9092'],    
})

export default kafka