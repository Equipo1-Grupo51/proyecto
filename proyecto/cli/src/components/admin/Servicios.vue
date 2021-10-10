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
        <form class="header_admin" @submit.prevent="editarServicio(servicioEditar)" v-if="editar">
            <h3>Editar servicio</h3>
            <input type="text" class="form-control" placeholder="Nombre" v-model="servicioEditar.nombre">
            <input type="text" class="form-control" placeholder="Descripcion" v-model="servicioEditar.descripcion">
            <button id="boton_editar" class="boton" type="submit">EDITAR</button>
            <button id="boton_cancelar" class="boton" type="submit" @click="editar=false">CANCELAR</button>
        </form>
        <form class="header_admin" @submit.prevent="agregarServicio()" v-if="!editar">
            <h3>Agregar nuevo servicio</h3>
            <input type="text" class="form-control" placeholder="Nombre" v-model="servicio.nombre">
            <input type="text" class="form-control" placeholder="Descripcion" v-model="servicio.descripcion">
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
                    <th scope="col">Nombre</th>
                    <th scope="col-4">Descripcion</th>
                    <!-- <th scope="col">Estado</th> -->
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in servicios" :key="index">
                        <th scope="row">{{item._id}}</th>
                        <td>{{item.nombre}}</td>
                        <td class="col-4">{{item.descripcion}}</td>
                        <!-- <td>{{item.active}}</td> -->
                        <div class="">
                            <!-- <button class="boton_activar">Activar</button> -->
                            <button @click="activarEdicion(item._id)" class="boton_editar">Editar</button>
                            <button @click="eliminarServicio(item._id)" class="boton_eliminar">Eliminar</button>                       
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
            servicios:[],
            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
            servicio:{nombre:"",descripcion:""},
            editar: false,
            servicioEditar:{}

        }
    },

    created(){
        this.listarServicios();
    },

    methods: {
        listarServicios(){
            this.axios.get('/servicios')
            .then(res=>{
                this.servicios = res.data;
            })
            .catch(e=>{
                console.log(e.response)
            })
        },
        agregarServicio(){
            this.axios.post('/nuevo-servicio', this.servicio)
            .then(res=>{
                this.servicios.push(res.data)
                this.servicio.nombre="";
                this.servicio.descripcion="";
                this.mensaje.color="success";
                this.mensaje.texto="Servicio Agregado";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
        eliminarServicio(id){
            this.axios.delete(`/servicios/${id}`)
            .then(res=>{
                const index = this.servicios.findIndex(item=> item._id===res.data._id)
                this.servicios.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Servicio Eliminado"
                this.showAlert();
            }).catch(e=>{
                console.log(e.response);
            })
        },
        activarEdicion(id){
            this.editar=true;
            this.axios.get(`/servicios/${id}`)
            .then(res=>{
                this.servicioEditar=res.data;
            }).catch(e=>{
                console.log(e.response);
            })
        },
        editarServicio(item){
            this.axios.put(`/servicios/${item._id}`, item)
            .then(res=>{
                const index= this.servicios.findIndex(item=> item._id===res.data._id);
                this.servicios[index].nombre = res.data.nombre;
                this.servicios[index].descripcion = res.data.descripcion;
                this.mensaje.color="success";
                this.mensaje.texto="Servicio Editado";  
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