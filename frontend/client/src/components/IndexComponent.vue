<template>
  <div class="mainIndex">
      <h1>Eventos</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Buscar por usuario</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Lugar</th>
              <th>Calificacion</th>
              <th>Usuario</th>
              <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                  <td>{{ post.titulo }}</td>
                  <td>{{ post.descripcion }}</td>
                  <td>{{  post.lugar  }}</td>
                  <td>{{  post.calificacion_evento  }}</td>
                  <td>{{  post.usuario  }}</td>
                  <td><router-link :to="{name: 'create', params: { id: post.idEvento, titulo: post.titulo, descripcion: post.descripcion, lugar: post.lugar, }}" class="btn btn-primary">calificar</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)">Borrar</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = 'http://localhost:3000/eventos';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:3000/delete/${id}`;
        this.axios.delete(uri).then( ()=> {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      }
    }
  }
</script>

<style>
.mainIndex
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