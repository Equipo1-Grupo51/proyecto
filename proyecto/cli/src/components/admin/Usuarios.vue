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
        <form class="header_admin" @submit.prevent="editarUsuario(usuarioEditar)" v-if="editar">
            <h3>Editar usuario</h3>
            <input type="text" class="form-control" placeholder="Username" v-model="usuarioEditar.username">
            <input type="text" class="form-control" placeholder="Password" v-model="usuarioEditar.password">
            <button id="boton_editar" class="boton" type="submit">EDITAR</button>
            <button id="boton_cancelar" class="boton" type="submit" @click="editar=false">CANCELAR</button>
        </form>
        <form class="header_admin" @submit.prevent="agregarUsuario()" v-if="!editar">
            <h3>Agregar nuevo usuario</h3>
            <input type="text" class="form-control" placeholder="Username" v-model="usuario.username">
            <input type="text" class="form-control" placeholder="Password" v-model="usuario.password">
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
                    <th scope="col">username</th>
                    <th scope="col">password</th>
                    <!-- <th scope="col">Estado</th> -->
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in usuarios" :key="index">
                        <th scope="row">{{item._id}}</th>
                        <td>{{item.username}}</td>
                        <td>{{item.password}}</td>                        
                        <!-- <td>
                            <span v-if="item.active">Activo</span>
                            <span v-else>Inactivo</span>
                        </td> -->
                        <div class="">
                            <!-- <button @click="cambiarActive(index)" class="boton_activar">Activar</button> -->
                            <button @click="activarEdicion(item._id)" class="boton_editar">Editar</button>
                            <button @click="eliminarUsuario(item._id)" class="boton_eliminar">Eliminar</button>                       
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
            usuarios:[],
            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
            usuario:{username:"",password:""},
            editar: false,
            usuarioEditar:{},

        }
    },

    created(){
        this.listarUsuario();
    },

    methods: {
        listarUsuario(){
            this.axios.get('/usuarios')
            .then(res=>{
                this.usuarios = res.data;
            })
            .catch(e=>{
                console.log(e.response)
            })
        },
        agregarUsuario(){
            this.axios.post('/nuevo-usuario', this.usuario)
            .then(res=>{
                this.usuarios.push(res.data)                
                this.usuario.nombre="";
                this.usuario.tipo="";
                this.usuario.precio="";
                this.usuario.descripcion="";
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Agregado";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);
            })
        },
        eliminarUsuario(id){
            this.axios.delete(`/usuarios/${id}`)
            .then(res=>{
                const index = this.usuarios.findIndex(item=> item._id===res.data._id)
                this.usuarios.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Eliminado"
                this.showAlert();
            }).catch(e=>{
                console.log(e.response);
            })
        },
        activarEdicion(id){
            this.editar=true;
            this.axios.get(`/usuarios/${id}`)
            .then(res=>{
                this.usuarioEditar=res.data;
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
        editarUsuario(item){
            this.axios.put(`/usuarios/${item._id}`, item)
            .then(res=>{
                const index= this.usuarios.findIndex(item=> item._id===res.data._id);
                this.usuarios[index].username = res.data.username;
                this.usuarios[index].password = res.data.password;            
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Editado";  
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