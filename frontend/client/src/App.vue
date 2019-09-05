<template>
  <div>
  <div class="homeMain">
   <!-- Header -->
  <header class="header" id='header'>
    <div>
      <div class="header_top" id="headermain">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="header_top_content d-flex flex-row align-items-center justify-content-start">
                <div>
                  <a href="/">
                    <div class="logo_container d-flex flex-row align-items-start justify-content-start">
                      <div class="logo_image"><div><img src="images/logo_1.jpg" alt=""></div></div>
                      <div class="logo_content">
                        <div id="logo_text" class="logo_text logo_text_not_ie">{{this.post.tituloLogo}}</div>
                        <div class="logo_sub">{{this.post.subLogo}}</div>
                      </div>
                    </div>
                  </a>  
                </div>
                <div class="header_social ml-auto">
                        <a id='startButton' class="btn btn-success" href="javascript:void(0);" onclick="javascript:introJs().start();">
                              Guia
                            </a>
                        <h5 v-for="user in users" :key="user.usuario" >{{user.usuario}}</h5>
                        <h5>{{this.$route.params.user}}</h5>
                        <ul data-step='8' data-intro='Visita nuestras redes sociales'> <!--LA redes sociales-->
                          <li v-for='red in this.post.redSociales' :key="red.id">   <!--Vfor-->
                            <a v-bind:href="red.hrefi">
                              <i v-bind:class="red.brand" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="header_nav" id="header_nav_pin">
              <div class="header_nav_inner">
                <div class="header_nav_container">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                          <nav class="main_nav" id='navIndex'>
                            <ul>
                              <li v-for='pagina in this.post.navBar' :key="pagina.id" v-bind:class='pagina.class' v-bind:data-step="pagina.datastep" v-bind:data-intro="pagina.dataintro">
                                <a v-bind:href="pagina.href">{{pagina.nombre}}</a>
                              </li>
                            </ul>
                          </nav>
                          <!--search-->
                          <div class="header_extra ml-auto">
                            <div class="header_search"><i class="fa fa-search" aria-hidden="true"></i></div>
                            <div class="button header_button"><a href="/login">Ingresar</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="search_container" id='search'>

                </div>
              </div>
            </div>                 
    </div>
  </header>
  <div class="container">
  
      <router-view></router-view>

  </div>
  </div>
  </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script >
    export default{
    data(){
        return {
          post:{
                  tituloLogo: 'Conservatorio Niccolo Paganini',
                  subLogo:'Guayaquil',

                  redSociales: [{"hrefi": "https://www.facebook.com/pg/conservatorioniccolopaganini/about/?ref=page_internal", "brand": "fa fa-facebook"},
                                {"hrefi": "https://www.instagram.com/explore/locations/1024942786/conservatorio-niccolo-paganini/", "brand": "fa fa-instagram"},
                                {"hrefi": "https://www.youtube.com/watch?v=bCxka95twgc", "brand":"fa fa-youtube"}],

                  navBar:[{"href":"/","nombre":"Inicio","class":"active","datastep":"1","dataintro":"Muestra la pagina princial"},{"href":"/about","nombre":"Sobre Nosotros","class":"","datastep":"2","dataintro":"Aqui podras encontrar todo sobre nosotros"},
                      {"href":"speakers","nombre":"Docentes","class":"","datastep":"3","dataintro":"Aqui encontraras los profesores del conservatorio"},{"href":"events","nombre":"Eventos","class":"","datastep":"4","dataintro":"Detalles sobre los proximos eventos"},
                      {"href":"news","nombre":"Cursos","class":"","datastep":"5","dataintro":"Conoce todo sobre nuestros programas"},{"href":"developers","nombre":"Equipo","class":"","datastep":"6","dataintro":"Conoce nuestro equipo de Desarrollo"},
                      {"href":"contact","nombre":"Contáctanos","class":"","datastep":"7","dataintro":"Deja tu mensaje y te lo responderemos"}]
          },
          users:[],
        }
    },
  created(){
    let uri = `http://localhost:3000/suscriptores/${this.$route.params.user}`;
        this.axios.get(uri).then((response) => {
            this.users = response.data;
        });
  },

  }
</script>