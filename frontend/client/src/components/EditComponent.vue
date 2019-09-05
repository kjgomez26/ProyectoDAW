<template>
  <div class="mainEdit">
    <h1>Editar calificacion</h1>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Titulo: </label>
            <p>{{post.titulo}}</p>
            <input type="text" class="form-control" v-model="post.titulo">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Descripcion: </label>
              <textarea class="form-control" v-model="post.descripcion" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Update</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          post: {}
        }
      },
      created() {
        let uri = `http://localhost:3000/eventos/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.post = response.data;
        });
      },
      methods: {
        updatePost() {
          let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
          this.axios.post(uri, this.post).then(() => {
            this.$router.push({name: 'posts'});
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