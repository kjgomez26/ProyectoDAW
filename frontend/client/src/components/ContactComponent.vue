<template>
  <div class="mainC">
      <div class="container mt-5 mb-5"> <!-- añadi margins-->
    <div class="row">
      <div class="col-lg-6">
        <div class="contact_form_container">
          <div class="contact_form_title">Contáctanos</div>
          <form method="POST" action="/send-email" class="contact_form" id="contact_form">
              <label for="exampleFormControlSelect1">Nombre</label><!--TODO: ver for-->
            <input type="text" class="contact_input" placeholder="John Doe" required="required" v-model="first_name">
            <label for="exampleFormControlSelect1">Email</label>
            <input type="email" class="contact_input" placeholder="johndoe@mail.com" required="required" v-model="email">
            <div class="form-group"> <!--th-->
                <label for="exampleFormControlSelect1">Ciudad</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Guayaquil</option>
                  <option>Quito</option>
                  <option>Cuenca</option>
                  <option>Loja</option>
                  <option>Otro</option>
                </select>
                </div>
                <label for="exampleFormControlSelect1">Subject</label>
            <input type="text" class="contact_input" placeholder="Asunto" required="required" v-model="asunto">
            <label for="exampleFormControlSelect1">Mensaje</label>
            <textarea name="contact_textarea" id="contact_textarea" class="contact_textarea contact_input" placeholder="Comment..." required="required" v-model="comentario"></textarea>
            <button class="button contact_button"><span>Send Message</span></button>
          </form>
        </div>
      </div>
      <div class="col-lg-5 offset-lg-1">
        <!--FIXME: arreglar margin-->
        <img src="https://images.unsplash.com/photo-1559553211-523e51d8fb08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="saxo">

      </div>
    </div>
  </div>

  <!--th fin-->

  <div class="contact">
    <div class="contact_map_background">

      <!-- Contact Map -->
      <div class="contact_map">

        <!-- Google Map -->
        <div class="map">
          <div id="google_map" class="google_map">
            <div class="map_container">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  </div>
</template>

<style>
.mainC
{
  width: 100%;
  height: 100%;
  margin-top:200px;
}
</style>
<!--TODO: Thai email -->
<script>
import axios from 'axios'
import router from '../../../../backend/src/routes/routes'
export default {
  data () {
    return {
      first_name: '',
      email: '',
      asunto:'',
      comentario:''
      //password: ''
    }
  },
  methods: {
    register () {
      axios.post('/send-email',
        {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        router.push({ name: 'Login' })
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
