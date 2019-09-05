<template>
 <div>
  <div class="news">
   <div class="row">
    <div class="col-lg-8 mainN">
     <div class="news_items">

        <h1 v-for="post in posts" :key="post.nombre">Bienvendio : {{post.nombre}}</h1>
        <h2 v-for="post in posts" :key="post.correo"> Correo: {{post.correo}}</h2>
        <h2 v-for="post in posts" :key="post.usuario">Usuario: {{post.usuario}}</h2>
        <h2 v-for="post in posts" :key="post.ciudad">Ciudad: {{post.ciudad}}</h2>
        <button> Ver mis calificaciones</button>
     
  </div>
 </div>
 </div>
 </div>
 </div>
</template>
<script>
  export default {
      data(){
        return {
          posts:[]
        }
      },
      created()
      { 
        //let usuario='cinviram';
        let uri = 'http://localhost:3000/suscriptores/cinviram';//+usuario;
        this.axios.get(uri).then( response => {
          this.posts = response.data;
        })
      },
    methods: {
        

      mostrar()
      { 
        //let usuario='cinviram';
        let uri = 'http://localhost:3000/suscriptores/cinviram';//+usuario;
        this.axios.get(uri).then( response => {
          this.posts = response.data;
        })
      }
    }
  }
</script>

<style>
.mainN
{
  width: 100%;
  height: 100%;
  margin-top:150px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 300;
  margin-top: 20%;

}
</style>
