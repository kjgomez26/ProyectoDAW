<template>
  <div >
    <div id="HTMLtoPDF">
      <h1>Calificaciones de eventos por usuario</h1>
        <div class="row mainIndex">
          <div class="col-md-10"><h1>Eventos</h1></div>
          <div class="col-md-2">
            <h5>Elige un usuario</h5>
            <form>
              <select v-model="usuario">
                    <option v-for="user in users" :key="user.usuario" >{{user.usuario}}</option>  
              </select>
              <h1></h1>
              <button class="btn btn-success" @click.prevent="mostrar">Mostrar</button>
            </form>
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
                </tr>
            </tbody>
        </table>
    </div>
      <button type="button" onclick="HTMLtoPDF()">Descargar PDF</button>
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
      let uri = 'http://localhost:3000/eventos';
      this.axios.get(uri).then(response => {
        this.posts = response.data;

      let uri2 = 'http://localhost:3000/usuarios';
      this.axios.get(uri2).then(response => {
        this.users = response.data;
      })
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:3000/delete/${id}`;
        this.axios.delete(uri).then( ()=> {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      },

      mostrar()
      { 
        let usuario1 = this.$data.usuario;
        let uri = 'http://localhost:3000/eventosUsuario/'+usuario1;
        this.axios.get(uri).then( response => {
          this.posts = response.data;
        })
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