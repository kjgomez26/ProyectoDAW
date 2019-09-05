<template>
  <div>
    <h1>Calificar</h1>
    <form @submit.prevent="addPost">
      <div class="row mainCr">
        <div class="col-md-6">
          <div class="form-group">
            <label>Titulo de evento:</label>
            <p>{{this.$route.params.titulo}}</p>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Descripcion de Evento:</label>
              <p>{{this.$route.params.descripcion}}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Lugar de evento:</label>
              <p>{{this.$route.params.lugar}}</p>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Calificacion:</label>
            <input type="text" class="form-control" v-model="post.calificacion_evento">
          </div>
        </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Submit</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          post:{
          "idEvento":this.$route.params.idEvento,
          "titulo" : this.$route.params.titulo,
          "descripcion" : this.$route.params.descripcion,
          "lugar" : this.$route.params.lugar,
          "organizador": this.$route.params.organizador,
          "calificacion_evento" : this.$route.params.calificacion_evento,
          "usuario": 'anonimo'
          }
        }
    },
    methods: {
      addPost(){
        let uri = 'http://localhost:3000/add';
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({name: 'posts'});
        });
      }
    }
  }
</script>

<style>
  .mainCr
  {
    width: 100%;
    height: 100%;
    margin-top: 200px;
  }
</style>
