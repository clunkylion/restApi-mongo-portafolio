import {Router} from 'express';
const router = Router();

//database connection
import {connect} from '../database';
router.get('/', async(req, res) =>{
    const db = await connect();
    const result = await db.collection('contacto').find({}).toArray()
    console.log(result);
    res.json(result);
})

router.post('/', async (req, res) =>{
    const db = await connect();
    const clientData = {
        nombre: req.body.nombre,
        mail: req.body.mail,
        fecha: req.body.fecha,
        idea: req.body.idea,
    }
    const result = await db.collection('contacto').insert(clientData);
    res.json(result.ops[0])
})

module.exports = router;