<template>
  <div>
      <h1>Eventos</h1>
        <div class="row mainIndex">
          <div class="col-md-10"><h1>Eventos</h1></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'crearEvento' }" class="btn btn-primary">Crear un evento</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>id</th>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Fecha</th>
              <th>Lugar</th>
              <th>idOrganizador</th>
              <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                  <td>{{ post.idEvento }}</td>
                  <td>{{  post.titulo  }}</td>
                  <td>{{ post.descripcion }}</td>
                  <td>{{post.fecha}}</td>
                  <td>{{  post.lugar  }}</td>
                  <td>{{  post.organizador }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: post.idEvento, titulo: post.titulo, descripcion: post.descripcion, lugar: post.lugar, fecha: post.fecha}}" class="btn btn-primary">Actualizar</router-link></td>
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
          usuario: "luiggisao"
        }
      },
      created() {
      let uri = 'http://localhost:3000/eventosConservatorio';
      this.axios.get(uri).then(response => {
        this.posts = response.data;

      let uri2 = 'http://localhost:3000/usuarios';
      this.axios.get(uri2).then(response => {
        this.users = response.data;
      })
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