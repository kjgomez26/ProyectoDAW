<template>
  <div>
      <h1>Eventos</h1>
        <div class="row mainIndex">
          <div class="col-md-10"><h1>Eventos</h1></div>
        </div><br />

        <table class="table table-hover" >
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
                  <td><router-link :to="{name: 'create', params: { id: post.idEvento, titulo: post.titulo, descripcion: post.descripcion, lugar: post.lugar, }}" class="btn btn-primary">Editar</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deleteEvento(post.idEvento)">Borrar</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          posts: [],
          users:[],
        }
      },
      created() {
      let usuario1 = this.$route.params.user;
        let uri = 'http://localhost:3000/eventosUsuario/'+usuario1;
        this.axios.get(uri).then( response => {
          this.posts = response.data;
        });
    },
    methods: {
      deleteEvento(id)
      {
        let uri = `http://localhost:3000/eventosConservatorio/${id}`;
        this.axios.delete(uri).then( ()=> {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      },
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