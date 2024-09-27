const canvas = document.getElementById('art-canvas');
const ctx = canvas.getContext('2d');

const lines = document.getElementById('lines');
const squares = document.getElementById('squares');

const width = window.innerWidth;
const height = window.innerHeight - 100;

canvas.width = width;
canvas.height = height;

ctx.fillStyle = 'white';
ctx.font = '64px serif';
ctx.fillText('What shall the Little Painter do for you today...', width/2-600, height/2)

const createLines = () => {
    ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
    ctx.beginPath()
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
}

const createSquares = () => {
    ctx.fillStyle = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, Math.random() * 200, Math.random() * 200);
}

lines.addEventListener('click', () => {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 5000; i++) {    
        setTimeout(createLines, 100);
    }
});

squares.addEventListener('click', () => {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 5000; i++) {    
        setTimeout(createSquares, 100);
    }
});

