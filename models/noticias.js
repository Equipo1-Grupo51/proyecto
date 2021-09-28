import mongoose from "mongoose";
const Schema = mongoose.Schema;

const noticiaSchema = new Schema({
    nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    url: String,
    date: {type: Date, default:Date.now},
    active: {type: Boolean, default:true},
});


//CONVERTIR A MODELO

const Noticia = mongoose.model('Noticia',noticiaSchema);
export default Noticia;