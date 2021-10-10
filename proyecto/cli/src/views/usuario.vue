<template>
  <div class="admin">
    <b-nav :class="[ !visibleSidebar ? 'd-none' : '' ]" vertical class="sidebar-content">
      <div>
        <h1 id="menu_titulo_admin">Citas</h1>
      </div>
      <b-nav-item id="parrafo_productos" @click="changeOption(1)" :class="[ option==1 ? 'active' : '']"><img src="../assets/productos_negro.png" alt="" class="imagen_admin">Información</b-nav-item>
      <b-nav-item id="parrafo_servicios" @click="changeOption(2)" :class="[ option==2 ? 'active' : '']"><img src="../assets/servicios_negro.png" alt="" class="imagen_admin">Hardware</b-nav-item>
      <b-nav-item id="parrafo_noticias" @click="changeOption(3)" :class="[ option==3 ? 'active' : '']"><img src="../assets/noticias_negro.png" alt="" class="imagen_admin">Software</b-nav-item>
    </b-nav>
    <div class="content-custom">
      <b-navbar id="menu_nav_admin">
        <div class="d-flex align-items-center mr-3">
          <span @click="isVisibleSidebar" class="navbar-toggler-icon"></span>
        </div>
        <b-navbar-nav>          
          <router-link to="/" class="nav-link">Home</router-link>          
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item><router-link to="/login">logout</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <div class="container-fluid">
        <div class="m-5">
          <Informacion v-if="option == 1"/>
          <Hardware v-else-if="option == 2"/>
          <Software v-else-if="option == 3"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Informacion from '../components/usuario/informacion.vue'
import Hardware from '../components/usuario/hardware.vue'
import Software from '../components/usuario/software.vue'
export default {
  components: {
    Informacion,
    Hardware,
    Software
  },
  data() {
    return {
      option: 1,
      visibleSidebar: true
    }
  },
  methods: {
    changeOption(i) {
      this.option = i
    },
    isVisibleSidebar() {
      this.visibleSidebar = !this.visibleSidebar
    }
  },
}
</script>
<style>
.admin {
  display: flex;
}
.admin .sidebar-content {
  background-color: rgba(203, 255, 255, 0.527);
  width: 300px;
  height: 100vh;
}
.admin .sidebar-content h1 {
  border-bottom: 1px solid black;
  margin-bottom: unset;
}
.admin .sidebar-content .nav-item .nav-link {
  color: black;
}
.admin .sidebar-content .nav-item :hover {
  background-color: rgb(255, 255, 255);
}
.admin .content-custom {
  width: 100%;
}
.admin .content-custom .navbar {
  height: 49px;
}
.active {
  border-left: 20px solid rgb(30, 145, 165);
  color: rgb(30, 145, 165);
  background-color: rgb(255, 255, 255);
}
.dropdown-item a {
  color: #212529;  
}
a :hover {
  text-decoration: none;
}
</style>