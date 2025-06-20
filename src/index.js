import express from 'express'
import routes from './routes.js';
import handlebars from 'express-handlebars'
import initDatabase from './config/dbConfig.js';
import cookieParser from 'cookie-parser';

const app = express();

initDatabase()

app.use(express.static('src/public'));

app.use(cookieParser)

app.use(express.urlencoded());

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
        // allowedProtoMethods:{ security
        //     'getAll': true
        // }
    }
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views')

app.use(routes);

app.listen(3000,() => console.log('server is listening on http://localhost:3000'));