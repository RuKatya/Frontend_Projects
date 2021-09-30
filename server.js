const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT ?? 7171; //connect to port 7171

app.use(express.static(path.resolve(__dirname, 'public'))) //static

app.get('/', (req, res) => {
    res.status(200)
    res.sendFile('/public/index.html')
})

//CONNECT TO PORT
try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`)
    })
} catch (err) {
    console.log(err)
}