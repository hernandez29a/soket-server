import {Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        msg: 'Todo esta bien!!!'
    });

});

router.post('/mensajes', (req: Request, res: Response) => {

    //const {cuerpo,de} = req.body;
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    
    res.json({
        ok: true,
        //msg: 'Todo esta bien con post!!!',
        cuerpo,
        de
    });

});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    //const {cuerpo,de} = req.body;
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    
    res.json({
        ok: true,
        //msg: 'Todo esta bien con post!!!',
        cuerpo,
        de,
        id
    });

});

export default router;