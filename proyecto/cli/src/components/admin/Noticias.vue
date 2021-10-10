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
        <form class="header_admin" @submit.prevent="editarNoticia(noticiaEditar)" v-if="editar">
            <h3>Editar producto</h3>
            <input type="text" class="form-control" placeholder="Nombre" v-model="noticiaEditar.nombre">
            <input type="text" class="form-control" placeholder="url" v-model="noticiaEditar.url">
            <button id="boton_editar" class="boton" type="submit">EDITAR</button>
            <button id="boton_cancelar" class="boton" type="submit" @click="editar=false">CANCELAR</button>
        </form>
        <form class="header_admin" @submit.prevent="agregarNoticia()" v-if="!editar">
            <h3>Agregar nueva noticia</h3>
            <input type="text" class="form-control" placeholder="Nombre" v-model="noticia.nombre">
            <input type="text" class="form-control" placeholder="url" v-model="noticia.url">
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
                    <th scope="col-4">url</th>
                    <!-- <th scope="col">Estado</th> -->
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in noticias" :key="index">
                        <th scope="row">{{item._id}}</th>
                        <td>{{item.nombre}}</td>
                        <td class="col-4">{{item.url}}</td>
                        <!-- <td>{{item.active}}</td> -->
                        <div class="">
                            <!-- <button class="boton_activar">Activar</button> -->
                            <button @click="activarEdicion(item._id)" class="boton_editar">Editar</button>
                            <button @click="eliminarNoticia(item._id)" class="boton_eliminar">Eliminar</button>                       
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
            noticias:[],
            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
            noticia:{nombre:"",url:""},
            editar: false,
            noticiaEditar:{}

        }
    },

    created(){
        this.listarNoticias();
    },

    methods: {
        listarNoticias(){
            this.axios.get('/noticias')
            .then(res=>{
                this.noticias = res.data;
            })
            .catch(e=>{
                console.log(e.response)
            })
        },
        agregarNoticia(){
            this.axios.post('/nueva-noticia', this.noticia)
            .then(res=>{
                this.noticias.push(res.data)
                this.noticia.nombre="";
                this.noticia.url="";
                this.mensaje.color="success";
                this.mensaje.texto="Noticia Agregado";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
        eliminarNoticia(id){
            this.axios.delete(`/noticias/${id}`)
            .then(res=>{
                const index = this.noticias.findIndex(item=> item._id===res.data._id)
                this.noticias.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Noticia Eliminado"
                this.showAlert();
            }).catch(e=>{
                console.log(e.response);
            })
        },
        activarEdicion(id){
            this.editar=true;
            this.axios.get(`/noticias/${id}`)
            .then(res=>{
                this.noticiaEditar=res.data;
            }).catch(e=>{
                console.log(e.response);
            })
        },
        editarNoticia(item){
            this.axios.put(`/noticias/${item._id}`, item)
            .then(res=>{
                const index= this.noticias.findIndex(item=> item._id===res.data._id);
                this.noticias[index].nombre = res.data.nombre;
                this.noticias[index].url = res.data.url;
                this.mensaje.color="success";
                this.mensaje.texto="Noticia Editado";  
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