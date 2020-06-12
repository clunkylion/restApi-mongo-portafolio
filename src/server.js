import express, {json} from 'express';
const app = express();
//set port
app.set('port', process.env.PORT || 4000)

//middleware (se ejecutan antes de que llegen a las rutas)
app.use(json())


//call ruotes
import indexRoutes from './routes/index.routes';
import contactRouter from './routes/contactForm.routes';
//use routes
app.use(indexRoutes);
app.use('/contacto',contactRouter);
export default app;