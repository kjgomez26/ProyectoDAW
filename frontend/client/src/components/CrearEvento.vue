<template>
  <div>
    <h1>Calificar</h1>
    <form @submit.prevent="addPost">
      <div class="row mainCr">
        <div class="col-md-6">
          <div class="form-group">
            <label>Titulo de evento:</label>
            <input type="text" class="form-control" v-model="post.titulo">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Descripcion de Evento:</label>
              <input type="text" class="form-control" v-model="post.descripcion">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Fecha</label>
              <input type="text" class="form-control" v-model="post.fecha">
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Lugar:</label>
            <input type="text" class="form-control" v-model="post.lugar">
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>idOrganizador:</label>
            <input type="text" class="form-control" v-model="post.organizador">
          </div>
        </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Crear</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          post:{
          }
        }
    },
    methods: {
      addPost(){
        let uri = 'http://localhost:3000/eventosConservatorio';
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({name: 'admin'});
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
