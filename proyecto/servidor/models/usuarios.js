import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    username: {type: String, required:[true, 'Nombre Obligatorio']},
    password: String,
    active: {type: Boolean, default:true},
});


//CONVERTIR A MODELO

const Usuario = mongoose.model('Usuario',usuarioSchema);
export default Usuario;