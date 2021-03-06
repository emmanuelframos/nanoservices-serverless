const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1'
})

const sqs = new AWS.SQS()

const putMessage = message => {
    return new Promise((res, rej) => {
        sqs.sendMessage({
            QueueUrl: '[QUEUE_URL]',
            MessageBody: JSON.stringify(message)
        }, (err, data) => {
            if (err) {
                return rej(err);
            }
            return res(data);            
        })
    })
}

module.exports = {
    putMessage:putMessage
}