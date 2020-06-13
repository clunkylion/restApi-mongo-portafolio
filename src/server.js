import express, {json} from 'express';
const app = express();
//set port
app.set('port', process.env.PORT || 4000)

//middleware (se ejecutan antes de que llegen a las rutas)
app.use(urlencoded({
    extended: false
}));
app.use(json())
app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
})

//call ruotes
import indexRoutes from './routes/index.routes';
import contactRouter from './routes/contactForm.routes';
import { urlencoded } from 'body-parser';
//use routes
app.use(indexRoutes);
app.use('/contacto',contactRouter);
export default app;