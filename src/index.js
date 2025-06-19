import express from 'express'

const app = express();

app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(3000,() => console.log('server is listening on http://localhost:3000'));