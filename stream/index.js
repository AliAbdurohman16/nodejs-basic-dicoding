const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('output.txt');

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log(error);
    }
});

readableStream.on('end', () => {
    console.log('Done');
});