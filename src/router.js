import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Servicios from './components/Servicios'
import Blog from './components/Blog'
import Comentarios from './components/Comentarios'
import NotFound from './components/NotFound'
import Cliente from './components/Cliente'
import ContactoNuevo from './components/ContactoNuevo'


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio,
    },
    {
      path: "/contacto",
      component: Contacto,
      name: 'contacto',
      redirect: () => {
          return { name: 'contacto-nuevo'}
      },
      alias: ['/contacto-2019', '/contacto-2020']
    },
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/',
        component: Inicio
    },
    {
        path: '',
        component: Inicio
    },
    {
        path: "/servicios",
        component: Servicios
    },
    {
        path: '/blog/:entrada',
        component: Blog,
        children: [
            {
                path: 'comentarios',
                component: Comentarios,
                name: 'comentarios'
            },
        ]
    },
    {
        path: '/cliente/:nombre',
        component: Cliente,
        //props: true
/*         props: {
            cliente: 'Clínica Santiago'
        } */
        props: (route)=>({
            cliente: `${route.params.nombre} s.a`
        })
    },
    {
        path: '/contacto-nuevo',
        component: ContactoNuevo,
        name: 'contacto-nuevo'
    },
  ],
});
