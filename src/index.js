import express from 'express'
import routes from './routes.js';

const app = express();

app.use(express.static('src/public'));

app.use(express.urlencoded());
 
app.use(routes);

app.listen(3000,() => console.log('server is listening on http://localhost:3000'));