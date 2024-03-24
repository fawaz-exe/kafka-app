import kafka from './client.js';
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

async function init(){
    const producer = kafka.producer();

    console.log('Connecting Producer');
    await producer.connect();
    console.log('Producer Connected Successfully')

    rl.setPrompt('> ')
    rl.prompt();

    rl.on('line', async function(line)  {
        const [name, server] = line.split(' ')
    })
    await producer.send({
        topic: 'model-update',
        messages: [
            {
                partition: server.toLowerCase() === 'Banglore' ? 0:1,
                key: 'server-update', 
                value: JSON.stringify({name: name, server:server})
            }
        ]
    }).on('close', async ()=>{
        await producer.disconnect()
    });

   
}

init()