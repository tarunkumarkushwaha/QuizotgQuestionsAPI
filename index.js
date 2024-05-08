const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let filePath;

    // Define routes
    if (req.url === '/') {
        filePath = path.join(__dirname, 'Data/htmlquestion.json');
    } else if (req.url === '/css') {
        filePath = path.join(__dirname, 'Data/cssquestion.json');
    } else if (req.url === '/javascript') {
        filePath = path.join(__dirname, 'Data/javascriptquestion.json');
    } else if (req.url === '/react') {
        filePath = path.join(__dirname, 'Data/reactquestions.json');
    } else if (req.url === '/wordpress') {
        filePath = path.join(__dirname, 'Data/wordpressquestion.json');
    } else {
        // If the route is not found, return a 404 error
        res.writeHead(404);
        res.end('Not Found');
        return;
    }

    // Read the file and send it
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Question API is running on ${PORT}`);
});




// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.sendFile('Data/htmlquestion.json', { root: __dirname })
// })
// app.get('/css', (req, res) => {
//     res.sendFile('Data/cssquestion.json', { root: __dirname })
// })
// app.get('/javascript', (req, res) => {
//     res.sendFile('Data/javascriptquestion.json', { root: __dirname })
// })
// app.get('/react', (req, res) => {
//     res.sendFile('Data/reactquestions.json', { root: __dirname })
// })
// app.get('/wordpress', (req, res) => {
//     res.sendFile('Data/wordpressquestion.json', { root: __dirname })
// })



// // Start the server
// app.listen(PORT, () => {
//     console.log(`question api is ruuning on ${PORT}`);
// });
