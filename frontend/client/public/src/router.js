import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AboutComponent from './components/AboutComponent.vue';
import Speakers from './components/SpeakersComponent.vue';
import Events from './components/EventsComponent.vue';
import Developers from './components/DevelopersComponent.vue';
import Contact from './components/ContactComponent.vue';
import CreateComponent from './components/CreateComponent.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
      path: '/create',
      name: 'Contact',
      component: CreateComponent,
    },
  ],
});
