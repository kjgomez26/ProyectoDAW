<template>
  <div>
    <h1>Editar calificacion</h1>
    <form @submit.prevent="updatePost" class="mainEdit">
    <h1>Editar Evento</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Titulo del evento: </label>
            <input type="text" class="form-control" v-model="post.titulo">
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Descripcion de Evento:</label>
              <input type="text" class="form-control" v-model="post.descripcion"></div>
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
          <button class="btn btn-primary">Actualizar</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          post:{}
        }
      },
      methods: {
        updatePost() {
        let id = this.$route.params.id;
          let uri = 'http://localhost:3000/eventosConservatorio/'+id;
          this.axios.put(uri, this.post).then(() => {
            this.$router.push({name: 'admin'});
          });
        }
      }
    }
</script>

<style>
.mainEdit
{
  width: 100%;
  height: 100%;
  margin-top:200px;
}

.h5E{
  margin-top:100px;
  text-align: center;
}
</style>