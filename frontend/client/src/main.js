import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import Speakers from './components/SpeakersComponent.vue';
import Events from './components/EventsComponent.vue';
import Developers from './components/DevelopersComponent.vue';
import Contact from './components/ContactComponent.vue';
import News from './components/NewsComponent.vue';
import Login from './components/LoginComponent.vue';
import Grafico1 from './components/Grafico1Component.vue';
import usuario from './components/UsuarioComponent.vue';
import Admin from './components/AdminComponent.vue';
import CrearEvento from './components/CrearEvento.vue';
import Calificaciones from './components/CalificacionesComponent.vue';
import LoginAdmin from './components/LoginAdminComponent.vue';
import Chat from "./components/ChatComponent.vue";

const routes = [
  {
    name: 'chat',
    path: '/chat',
    component: Chat
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/eventos',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  },
  {
      name: 'about',
      path: '/about',
      component: AboutComponent,
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: Speakers,
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/developers',
      name: 'devleopers',
      component: Developers,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/grafico1',
      name: 'grafico1',
      component: Grafico1,
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: usuario,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/crearEvento',
      name: 'crearEvento',
      component: CrearEvento,
    },
    {
      path: '/calificaciones',
      name: 'calificaciones',
      component: Calificaciones,
    },
    {
      path: '/loginAdmin',
      name: 'loginAdmin',
      component: LoginAdmin,
    },

];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
