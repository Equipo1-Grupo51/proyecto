<template>
  <div>   

    <div>
      <main>
        <header class="hero">     
            <nav class="row menu">
                <router-link target="_blank" id="ingresar" class="col col-md-1 col-xl-1 boton nav-link" to="/login_admin">INGRESAR</router-link>
                <nav class="col-12 col-md col-xl barra_navegacion">
                    <ul class="row col-md-12">
                        <a href="#" class="col-5 col-md-auto atajos_nav">INICIO</a>
                        <a href="#services" class="col-5 col-md-auto atajos_nav">SERVICIOS</a>
                        <a href="#news" class="col-5 col-md-auto atajos_nav">NOTICIAS</a>
                        <a href="#team" class="col-5 col-md-auto atajos_nav">EQUIPO</a>
                        <a href="#contactanos" class="col-5 col-md-auto atajos_nav">CONTÁCTANOS</a> 
                    </ul>
                </nav>
            </nav>
            <div id="background_principal" class="row">
                <h1 class="bienvenido">BIENVENID@</h1>
                <p class="texto_inicio">Asersorías y ventas de computo</p>
            </div>
            <div style="height: 100px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
        </header>

        
         <!--Servicios -->
        <section id="services" class="services-section">
            <h2 id="titulo_servicios" class="h2_principal">SERVICIOS</h2>
            <div class="row" >
                <article class="col-11 col-md-5 col-lg-5 services-info">
                    <img class="services-info__imagen" src="../assets/undraw_Active_support_re_b7sj.svg" width="50%" alt="">
                    <h2 class="services-info__title">Asesorías</h2>
                    <p class="services-info__text">
                        Asesorias de hardware y software, donde te instruiremos para que puedas armar tu propia pc, actualizar el hardware, instalar los porgramas que necesites para tu pc, actualizar drivers y más.
                    </p>
                    <router-link to="/usuario" target="_blank" class="button">Citas</router-link>
                </article>
                <article class="col-11 col-md-6 col-lg-6 services-info">
                    <img class="services-info__imagen" src="../assets/undraw_add_to_cart_vkjp.svg" width="60%" alt="">
                    <h2 class="services-info__title">Computo</h2>
                    <p class="services_text">
                        Compra los mouse, teclados y monitores para tu pc. Ademas te ofrecemos computadores totalmente armados como laptops, todo en uno y pc de escritorio.
                    </p>
                     <router-link class="button" to="/tienda" target="_blank">Catalogo</router-link>

                </article>
            </div>
        </section>
    

        <!--Noticias -->
        <section id="news" class="news-section">
            <h2 id="titulo_noticias" class="h2_principal">NOTICIAS</h2>
            <div class="row" id="iframes_noticias">
                <div>
                    <iframe src="https://www.debate.com.mx/tecnologia/Si-te-lo-perdiste-estas-son-las-noticias-tecnologicas-mas-impactantes-de-la-semana-20210916-0145.html" frameborder="0" id="noticia1" title="Noticia 1" class="col-10 col-md-5 col-lg-5 noticia"></iframe>
                    <iframe src="https://sevilla.abc.es/agronoma/noticias/cultivos/freson/brantd-tecnologia-retrasar-pudricion-fresa/" id="noticia2" title="Noticia 2" class="col-10 col-md-5 col-lg-5 noticia"></iframe>
                </div>
                <div>
                    <iframe src="https://elcomercio.pe/tecnologia/tecnologia/fake-news-la-desinformacion-en-facebook-obtiene-6-veces-mas-clics-que-las-noticias-segun-un-estudio-noticias-falsas-noticia/" frameborder=0 id="noticia3" title="Noticia 3" class="col-10 col-md-5 col-lg-5 noticia"></iframe>
                    <iframe src="https://www.minuto30.com/otro-iphone-mision-espacial-cinco-clics/1273139/" frameborder="0" id="noticia4" title="Noticia 4" class="col-10 col-md-5 col-lg-5 noticia"></iframe>
                </div>
            </div>
        </section>
    

        <!--Equipo -->
        <section id="team" class="team-section">
    
            <h2 id="titulo_equipo" class="h2_principal">EQUIPO</h2>
            <section class="row seccion-de-equipo">        
                <article class="col-12 col-md-4 col-lg-3 team-info">
                    <img class="imagen_team-info" src="../assets/Andres.jpeg"  height="200px" width="200px" alt="">
                    <h3 class="title_team-info">Andres Felipe Maya</h3>
                    <p class="text_team-info">
                        Bachiller egresado del INEM Francisco Jose de Caldas de Popayan, tripulante de la MisionTic 2022 en la UTP (Universidad Tecnologia de Pereira)
                    </p>
                    <b>Contacto Personal +57 3122732200</b>
                </article>
            
                <article class="col-12 col-md-4 col-lg-3 team-info">
                    <img class="imagen_team-info" src="../assets/alejandro.jpg" height="200px" width="200px" alt="">
                    <h3 class="title_team-info">Alejandro Palacios Figueroa</h3>
                    <p class="text_team-info">
                        Estudiante de Ingenieria Electronica en la Universidad Surcolombiana, tripulante de la MisionTic 2022 en la UTP (Universidad Tecnologia de Pereira)
                    </p>
                    <p><b>Contacto Personal +57 3012738506</b></p>
                </article>
            
                <article class="col-12 col-md-4 col-lg-3 team-info">
                    <img class="imagen_team-info" src="../assets/Cesar.jpeg" height="200px" width="200px" alt="">
                    <h3 class="title_team-info">Cesar Andres Leon</h3>
                    <p class="text_team-info">
                        Tecnico en Sistema egresado del SENA en alianzas con Institutos Tecnologicos, tripulante de la MisionTic 2022 en la UTP (Universidad Tecnologia de Pereira)
                    </p>
                    <p><b>Contacto Personal +57 3144840261</b></p>
                </article>
            
                <article class="col-12 col-md-4 col-lg-3 team-info">
                    <img class="imagen_team-info" src="../assets/Edward.jpeg" height="200px" width="200px" alt="">
                    <h3 class="title_team-info">Edward Bolaños Salinas</h3>
                    <p class="text_team-info">
                        Bachiller egresado de la I.E. Juan Bautista Bolaños, tripulante de la MisionTic 2022 en la UTP (Universidad Tecnologia de Pereira)
                    </p>
                    <p><b>Contacto Personal +57 3148173048</b></p>
                </article>
            
                <article class="col-12 col-md-4 col-lg-3 team-info">
                    <img class="imagen_team-info" src="../assets/jeison.jpeg" height="200px" width="190px" alt="">
                    <h3 class="title_team-info">Jeisson Alejandro Vargas</h3>
                    <p class="text_team-info">
                        Tecnico profesional en inglés, Administrador publico en la ESAP, tripulante de la MisionTic 2022 en la UTP (Universidad Tecnologia de Pereira)
                    </p>
                    <p><b>Contacto Personal +57 301 4170745</b></p>
                </article>
            </section>
        </section>
    </main>
    </div>
    <transition name="fade">
      <a v-if="!isVisibleUpButton" href="#" class="back-to-top"><b-icon-arrow-up-circle-fill font-scale="3"></b-icon-arrow-up-circle-fill></a>
    </transition>
        <footer class="footer-section" id="contactanos">
        <div class="foot2">
            <br>
            <div class="container text-center text-white">
                <div class="row justify-content-center">
                    <div id="enlaces_utiles_foot" class="col">
                        <h2>Enlaces útiles</h2> 

                        <p class="foot3">
                        <br>
                        <a class="foot4" href="#">INICIO</a>
                        <br>
                        <a class="foot4" href="#services"> SERVICIOS</a>
                        <br>
                        <a class="foot4" href="#news"> NOTICIAS</a>
                        <br>
                        <a class="foot4" href="#team"> EQUIPO</a>
                        <br>

                        </p>
                    </div>
                    <div id="servicios_foot" class="col-0 col-md-4">
                        <h2>Nuestros Servicios</h2>
                        <p>
                            <ul>
                                <a class="foot4" href="#services">Asesorias</a>
                                <br>
                                <a class="foot4" href="#services">Productos</a>
                            </ul>
                        </p>
                    </div>
                    <div class="col-8 col-md">
                        <p class="foot5"> Contáctenos</p>
                        <p class="foot3">
                        
                            <p class="foot4">Redes sociales:</p>
                            <a href="http://www.facebook.com/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width=32 height=32 /></a>
                            <a 
                            href="https://www.instagram.com/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width=32 height=32 
                            /></a>
                                <a 
                            href="https://www.whatsapp.com/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png" width=32 height=32 
                            /></a>

                            <p class="foot4">o también puedes contactarnos mediante correo electrónico:</p>

                            <p class="foot3"><a href="https://www.google.com/intl/es-419/gmail/about/#"></a><strong> soporte@compuservicios.com</strong></p>
                    </div>


                </div>
            </div>
    </div>

    </footer>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isVisibleUpButton: true,
      scrollPosition: 0,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition > 100) {
        this.isVisibleUpButton = false;
      } else {
        this.isVisibleUpButton = true;
      }
    }
  },
}
</script>
<style>
.back-to-top {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
}
</style>