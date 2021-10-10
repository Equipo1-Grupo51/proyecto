<template>
    <div id="body_loggin" class="loggin">
        <section class="espacio_blanco"></section>
        <router-link id="boton_usuario" class="boton" to="/login_admin"></router-link>
        <div>
          <form @submit.prevent="onSubmit" class="recuadro_loggin">
            <img src="../assets/logo_loggin.png" alt="Image_inicio" class="image_loggin">
            <h1 class="iniciar_sesion_texto">INICIAR SESIÓN</h1>
            <div id="username">
                <img src="../assets/Username.png" alt="Username" class="image_username"><input type="Username" id="Username" placeholder="Username" class="input" required>
            </div>
            <div id="password">
                <img src="../assets/Password.png" alt="Password" class="image_password"><input type="Password" name="Password" id="Password" placeholder="Password" class="input" required>
            </div>
            <div id="texto_loggin">
                <p>¿Olvidó su contraseña?</p>
            </div>
            <button  type="submit" value="Submit request" id="boton_acceder" class="boton">ACCEDER</button>
          </form>  
        </div>

        <section class="espacio_blanco"></section>
        
    </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.$router.push('usuario')
      },
      onReset(event) {
        event.preventDefault()
        this.$router.push('/')
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