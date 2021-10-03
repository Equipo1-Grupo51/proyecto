import mongoose from "mongoose";
const Schema = mongoose.Schema;

const servicioSchema = new Schema({
    nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    descripcion: String,
    usuarioId: String,
    date: {type: Date, default:Date.now},
    active: {type: Boolean, default:true},
});


//CONVERTIR A MODELO

const Servicio = mongoose.model('Servicio',servicioSchema);
export default Servicio;