import express from 'express';
const router = express.Router();

import Producto from '../models/productos'

//Agregar un producto

router.post('/nuevo-producto', async(req, res) => {
    const body = req.body;
    try {
        const productoDB = await Producto.create(body);
        res.status(200).json(productoDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.get('/productos/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const productoDB = await Producto.findOne({_id});
        res.json(productoDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.get('/productos', async(req, res) => {

    try {
        const productoDB = await Producto.find();
        res.json(productoDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.delete('/productos/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const productoDB = await Producto.findByIdAndDelete({_id});
        if(!Producto){
            return res.status(400).json({
                mensaje: 'No se encontro el id del producto', error })
        }
        res.json(productoDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.put('/productos/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const productoDB = await Producto.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(productoDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

//SERVICIOS

import Servicio from '../models/servicios'

//Agregar un servicio

router.post('/nuevo-servicio', async(req, res) => {
    const body = req.body;
    try {
        const servicioDB = await Servicio.create(body);
        res.status(200).json(servicioDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.get('/servicio/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const servicioDB = await Servicio.findOne({_id});
        res.json(servicioDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.get('/servicios', async(req, res) => {

    try {
        const servicioDB = await Servicio.find();
        res.json(servicioDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.delete('/servicios/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const servicioDB = await Servicio.findByIdAndDelete({_id});
        if(!Servicio){
            return res.status(400).json({
                mensaje: 'No se encontro el id del servicio', error })
        }
        res.json(servicioDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.put('/servicios/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const servicioDB = await Servicio.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(servicioDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

//NOTICIAS

import Noticia from '../models/noticias'

//Agregar una noticia

router.post('/nueva-noticia', async(req, res) => {
    const body = req.body;
    try {
        const noticiaDB = await Noticia.create(body);
        res.status(200).json(noticiaDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.get('/noticias/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const noticiaDB = await Noticia.findOne({_id});
        res.json(noticiaDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.get('/noticias', async(req, res) => {

    try {
        const noticiaDB = await Noticia.find();
        res.json(noticiaDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.delete('/noticias/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const noticiaDB = await Noticia.findByIdAndDelete({_id});
        if(!Noticia){
            return res.status(400).json({
                mensaje: 'No se encontro el id de la noticia', error })
        }
        res.json(noticiaDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});

router.put('/noticias/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const noticiaDB = await Noticia.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(noticiaDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ha ocurrido un error',
            error
        })
    }
});




module.exports = router;