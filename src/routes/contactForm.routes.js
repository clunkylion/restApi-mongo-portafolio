import {Router} from 'express';
const router = Router();

//database connection
import {connect} from '../database';
import {ObjectID} from 'mongodb'
//show 
router.get('/', async(req, res) =>{
    const db = await connect();
    const result = await db.collection('contacto').find({}).toArray()
    console.log(result);
    res.json(result);
})
//insert
router.post('/', async (req, res) =>{
    const db = await connect();
    const clientData = {
        nombre: req.body.nombre,
        mail: req.body.mail,
        fecha: req.body.fecha,
        idea: req.body.idea,
    }
    const result = await db.collection('contacto').insertOne(clientData);
    res.json(result.ops[0])
})

//buscar por id
router.get('/:id', async(req, res)=>{
    //trae un objeto el id que se pasa por la url
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('contacto').findOne( {_id: ObjectID(id)} );
    res.json(result);
});

//eliminar
router.delete('/:id', async(req, res) =>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('contacto').deleteOne({_id: ObjectID(id)});
    res.json(
        {
            message: `Contact id: ${id} deleted`,
            result
        }
    )
    if (result) {
        console.log('Eliminado Correctamente');
    }else{
        console.log("Error al eliminar");
        
    }
});

//actualizar
router.put('/:id', async (req, res) =>{
    const {id} = req.params;
    const updateContact = {
        nombre: req.body.nombre,
        mail: req.body.mail,
        fecha: req.body.fecha,
        idea: req.body.idea,
    };
    const db = await connect();
    await db.collection('contacto').updateOne({_id: ObjectID(id)}, { $set: updateContact});
    res.json({
        message : `Contact id: ${id} updated`
    })

})

module.exports = router;