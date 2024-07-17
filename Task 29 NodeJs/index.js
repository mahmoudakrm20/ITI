const fs = require('fs');
const http = require('http');
const path = require('path');

const html = fs.readFileSync('./index.html', 'utf-8');
const image = fs.readFileSync('./thefinals.jpg');
const css = fs.readFileSync('./styles.css');

http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.write(html);
        res.end(); 
        return;
    }
    if (req.url === '/styles') {
        res.end(css); 
        return;
    }
    if (req.url === '/image') {
        res.end(image);
        return;
    }
    res.end("Not Found");
}).listen(1997, () => {
    console.log('Server running on port 1997');
});
