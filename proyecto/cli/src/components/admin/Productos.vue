<template>
    <div>
        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
            {{mensaje.texto}}
        </b-alert>
        <form class="header_admin" @submit.prevent="editarProducto(productoEditar)" v-if="editar">
            <h3>Editar producto</h3>
            <input type="text" class="form-control" placeholder="Nombre" v-model="productoEditar.nombre">
            <input type="text" class="form-control" placeholder="Tipo" v-model="productoEditar.tipo">
            <input type="text" class="form-control" placeholder="Precio" v-model="productoEditar.precio">
            <input type="text" class="form-control" placeholder="Descripcion" v-model="productoEditar.descripcion">
            <button id="boton_editar" class="boton" type="submit">EDITAR</button>
            <button id="boton_cancelar" class="boton" type="submit" @click="editar=false">CANCELAR</button>
        </form>
        <form class="header_admin" @submit.prevent="agregarProducto()" v-if="!editar">
            <h3>Agregar nuevo producto</h3>
            <input type="text" class="form-control" placeholder="Nombre" v-model="producto.nombre">
            <input type="text" class="form-control" placeholder="Tipo" v-model="producto.tipo">
            <input type="text" class="form-control" placeholder="Precio" v-model="producto.precio">
            <input type="text" class="form-control" placeholder="Descripcion" v-model="producto.descripcion">
            <button id="boton_agregar" class="boton" type="submit">AGREGAR</button>
        </form>
        <div id="contenido_admin">
            <!-- <div id="filtro" class="row section_filtro">
                <p class="col-auto parrafo_filtro">Filtrar:</p>
                <input name="filtro" type="search" id="texto_filtro" placeholder="Filtro...">
                <button id="boton_filtro" type="submit" class="boton">Filtrar</button>        
            </div> -->

            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Nombre</th>                    
                    <th scope="col">Precio</th>
                    <th scope="col-4">Descripcion</th>
                    <!-- <th scope="col">Estado</th> -->
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in productos" :key="index">
                        <th scope="row">{{item._id}}</th>
                        <td>{{item.tipo}}</td>
                        <td>{{item.nombre}}</td>                        
                        <td>{{item.precio}}</td>
                        <td class="col-4">{{item.descripcion}}</td>
                        <!-- <td>
                            <span v-if="item.active">Activo</span>
                            <span v-else>Inactivo</span>
                        </td> -->
                        <div class="">
                            <!-- <button @click="cambiarActive(index)" class="boton_activar">Activar</button> -->
                            <button @click="activarEdicion(item._id)" class="boton_editar">Editar</button>
                            <button @click="eliminarProducto(item._id)" class="boton_eliminar">Eliminar</button>                       
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    
</template>

<script>
export default {
    
    data(){
        return{
            productos:[],
            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
            producto:{tipo:"",nombre:"",precio:"",descripcion:""},
            editar: false,
            productoEditar:{},

        }
    },

    created(){
        this.listarProductos();
    },

    methods: {
        listarProductos(){
            this.axios.get('/productos')
            .then(res=>{
                this.productos = res.data;
            })
            .catch(e=>{
                console.log(e.response)
            })
        },
        agregarProducto(){
            this.axios.post('/nuevo-producto', this.producto)
            .then(res=>{
                this.productos.push(res.data)                
                this.producto.nombre="";
                this.producto.tipo="";
                this.producto.precio="";
                this.producto.descripcion="";
                this.mensaje.color="success";
                this.mensaje.texto="Producto Agregado";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
        eliminarProducto(id){
            this.axios.delete(`/productos/${id}`)
            .then(res=>{
                const index = this.productos.findIndex(item=> item._id===res.data._id)
                this.productos.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Producto Eliminado"
                this.showAlert();
            }).catch(e=>{
                console.log(e.response);
            })
        },
        activarEdicion(id){
            this.editar=true;
            this.axios.get(`/productos/${id}`)
            .then(res=>{
                this.productoEditar=res.data;
            }).catch(e=>{
                console.log(e.response);
            })
        },
        // cambiarActive(item){
        //     this.axios.get(`/productos/${item._id}`, item)
        //     .then(res=>{
        //         const index= this.productos.findIndex(item=> item._id===res.data._id);
        //         this.productos[index].active = res.data.active;
        //     }).catch(e=>{
        //         console.log(e.response);
        //     })
        // },
        editarProducto(item){
            this.axios.put(`/productos/${item._id}`, item)
            .then(res=>{
                const index= this.productos.findIndex(item=> item._id===res.data._id);
                this.productos[index].tipo = res.data.tipo;
                this.productos[index].nombre = res.data.nombre;
                this.productos[index].precio = res.data.precio;
                this.productos[index].descripcion = res.data.descripcion;              
                this.mensaje.color="success";
                this.mensaje.texto="Producto Editado";  
                this.showAlert();
                this.editar = false;
            }).catch(e=>{
                console.log(e.response);
            })
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    }
}
</script>