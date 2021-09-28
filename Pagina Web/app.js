import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//CONEXION A BASE DE DATOS
const mongoose = require('mongoose'); 
const url = 'mongodb://localhost:27017/administracion';
const options = {UseNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(url, options).then(
    () => {
        console.log('conexion exitosa')
    },
    err => { err }
);


//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//RUTA
app.use('/api', require('./routes/rutas'));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'src')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('Example app listening on port' + app.get('puerto'));
});