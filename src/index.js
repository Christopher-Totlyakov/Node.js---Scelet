import expres from 'express'

const app  = expres();

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(3000,() => console.log('server is listening on http://localhost:3000'));