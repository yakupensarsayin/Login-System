const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send("Başarıyla Ana sayfa ulaştınız.");
})

app.listen(port, () => {
    console.log(`Port ${port}'de sunucu açık! 🚀`)
});

