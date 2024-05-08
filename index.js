const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile('Data/htmlquestion.json', { root: __dirname })
})
app.get('/css', (req, res) => {
    res.sendFile('Data/cssquestion.json', { root: __dirname })
})
app.get('/javascript', (req, res) => {
    res.sendFile('Data/javascriptquestion.json', { root: __dirname })
})
app.get('/react', (req, res) => {
    res.sendFile('Data/reactquestions.json', { root: __dirname })
})
app.get('/wordpress', (req, res) => {
    res.sendFile('Data/wordpressquestion.json', { root: __dirname })
})



// Start the server
app.listen(PORT, () => {
    console.log(`question api is ruuning on ${PORT}`);
});
