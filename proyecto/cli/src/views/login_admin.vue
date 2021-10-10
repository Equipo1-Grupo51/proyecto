<template>
    <div class="loggin" >
        <section class="espacio_blanco"></section>
        <router-link id="boton_usuario_admin" class="boton" to="/login"></router-link>
        <div>
          <form @submit.prevent="onSubmit" class="recuadro_loggin" id="recuadro_loggin_admin">
            <img src="../assets/logo_loggin_blanco.png" alt="Image_inicio" class="image_loggin">
            <h1 class="iniciar_sesion_texto" id="iniciar_sesion_texto_admin">INICIAR SESIÓN</h1>
            <div id="username">
                <img src="../assets/Username_blanco.png" alt="Username" class="image_username"><input v-model="form.username" type="Username" id="Username_admin" placeholder="Username" class="input" required>
            </div>
            <div id="password">
                <img src="../assets/Password_blanco.png" alt="Password" class="image_password"><input v-model="form.password" type="Password" name="Password" id="Password_admin" placeholder="Password" class="input" required>
            </div>
            <div id="texto_loggin_admin">
                <p>{{message}}</p>
            </div>
            <button  type="submit" value="Submit request" id="boton_acceder_admin" class="boton">ACCEDER</button>
          </form>  
        </div>

        <section class="espacio_blanco"></section>
        
    </div>

</template>

<script>
  export default {
    data(){
      return {
        form:{
          username: '',
          password: '',
        },
        show: true, 
        usuarios: [],
        message:''
      }
    },
    methods: {
      onSubmit() {
        this.axios.get('/usuarios') 
        .then(res => {
          this.usuarios = res.data;
          this.usuarios.forEach((value) => {
            if(this.form.username === value.username){
              if(this.form.password === value.password){
                window.localStorage.setItem('autenticacion','ok');
                this.$router.push('admin')
              }           
            }else{
              this.message = 'Username y/o Password Incorrecta'
            }
          })
        })  
        
        } 
      },
      onReset(event) {
        event.preventDefault()
        this.$router.push('/')
    },
    beforeCreate(){
    var autenticacion = window.localStorage.getItem('autenticacion');
    if(autenticacion === 'ok'){
      this.$router.push('admin');
    }
  }
  }
</script>
<style>
  .login {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .login .login-content{
    background-color: aqua;
    padding: 15px;
    max-width: 400px;
    border-radius: 10px;
  }
</style>