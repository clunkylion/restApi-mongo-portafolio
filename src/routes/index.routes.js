import {Router} from 'express';
const router = Router();

router.get('/', (req, res) =>{
    res.send('bienvenido a mi API');
})

module.exports = router;