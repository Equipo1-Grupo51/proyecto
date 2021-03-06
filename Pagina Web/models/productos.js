import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: {type: String, required:[true, 'Nombre Obligatorio']},
    descripcion: String,
    precio: String,
    usuarioId: String,
    date: {type: Date, default:Date.now},
    active: {type: Boolean, default:true},


});


//CONVERTIR A MODELO

const Producto = mongoose.model('Producto',productoSchema);
export default Producto;