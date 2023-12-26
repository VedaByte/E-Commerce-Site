const path = require('path');
const Mp32Wav = require('mp3-to-wav');

console.log('hello');

const inputPath = './result.mp3';
const outputPath = './output.wav';

new Mp32Wav(
    input: inputPath,
    output: outputPath
).exec((err) => {
    if (err) {
        console.error('mp3 to wav exec err:', err);
    } else {
        console.log('Conversion completed successfully!');
    }
});

console.log('bye');
