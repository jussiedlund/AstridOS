const { createCanvas } = require('canvas');
const fs = require('fs');

const WIDTH = 64;
const HEIGHT = 32;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

function renderFrame() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.fillStyle = 'white';
    ctx.font = '10px sans-serif';
    ctx.fillText('Hello, AstridOS!', 5, 20);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('frame.png', buffer);
}

setInterval(renderFrame, 1000 / 60); // 60 FPS simulation
