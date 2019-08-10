
Vue.component('hamburguercomponent',{
   template : `<div class="hamburger ml-auto">
   					<i class="fa fa-bars" aria-hidden="true">
   					</i>
   				</div>`
});






var header= new Vue({
		el: '#header2',

		data:{
			tituloLogo: 'Conservatorio Niccolo Paganini',
			subLogo:'Guayaquil',

			redSociales: [{"hrefi": "https://www.facebook.com/pg/conservatorioniccolopaganini/about/?ref=page_internal", "brand": "fa fa-facebook"},
			{"hrefi": "https://www.instagram.com/explore/locations/1024942786/conservatorio-niccolo-paganini/", "brand": "fa fa-instagram"},
			{"hrefi": "https://www.youtube.com/watch?v=bCxka95twgc", "brand":"fa fa-youtube"}],

			


		}
});

var headermain= new Vue({
		el: '#headermain',

		data:{
			tituloLogo: 'Conservatorio Niccolo Paganini',
			subLogo:'Guayaquil',

			redSociales: [{"hrefi": "https://www.facebook.com/pg/conservatorioniccolopaganini/about/?ref=page_internal", "brand": "fa fa-facebook"},
			{"hrefi": "https://www.instagram.com/explore/locations/1024942786/conservatorio-niccolo-paganini/", "brand": "fa fa-instagram"},
			{"hrefi": "https://www.youtube.com/watch?v=bCxka95twgc", "brand":"fa fa-youtube"}],

		components:{'guiacomponent': {
         template : `<a id='startButton' class="btn btn-success" href="javascript:void(0);" onclick="javascript:introJs().start();">
         				Guia
         			</a>`
      }
   }


		}
});


var header3= new Vue({
		el: '#header3',

		data:{
			tituloLogo: 'Conservatorio Niccolo Paganini',
			subLogo:'Guayaquil',

			redSociales: [{"hrefi": "https://www.facebook.com/pg/conservatorioniccolopaganini/about/?ref=page_internal", "brand": "fa fa-facebook"},
			{"hrefi": "https://www.instagram.com/explore/locations/1024942786/conservatorio-niccolo-paganini/", "brand": "fa fa-instagram"},
			{"hrefi": "https://www.youtube.com/watch?v=bCxka95twgc", "brand":"fa fa-youtube"}],

			


		}
});

var footer=new Vue({
		el: '#footer',

		data:{

			tituloLogo: 'Conservatorio Niccolo Paganini',
			subLogo:'Guayaquil',
			descripcion:'El Conservatorio Particular de Música “Niccolo Paganini” es una institución dedicada a la formación de músicos profesionales.Te preparamos para vivir la música.',
			redSociales: [{"hrefi": "https://www.facebook.com/pg/conservatorioniccolopaganini/about/?ref=page_internal", "brand": "fa fa-facebook"},
			{"hrefi": "https://www.instagram.com/explore/locations/1024942786/conservatorio-niccolo-paganini/", "brand": "fa fa-instagram"},
			{"hrefi": "https://www.youtube.com/watch?v=bCxka95twgc", "brand":"fa fa-youtube"}],

			navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":"active"},
			{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
			{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
			{"href":"contact.html","nombre":"Contáctanos","class":""}]


		}
});

//Paginas
var about= new Vue({
	el:'#navAbout',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":"active"},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});

var about= new Vue({
	el:'#navAbout2',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":"active"},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});

var index= new Vue({
	el:'#navIndex',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":"active","datastep":"1","dataintro":"Muestra la pagina princial"},{"href":"about.html","nombre":"Sobre Nosotros","class":"","datastep":"2","dataintro":"Aqui podras encontrar todo sobre nosotros"},
		{"href":"speakers.html","nombre":"Docentes","class":"","datastep":"3","dataintro":"Aqui encontraras los profesores del conservatorio"},{"href":"events.html","nombre":"Eventos","class":"","datastep":"4","dataintro":"Detalles sobre los proximos eventos"},
		{"href":"news.html","nombre":"Cursos","class":"","datastep":"5","dataintro":"Conoce todo sobre nuestros programas"},{"href":"developers.html","nombre":"Equipo","class":"","datastep":"6","dataintro":"Conoce nuestro equipo de Desarrollo"},
		{"href":"contact.html","nombre":"Contáctanos","class":"","datastep":"7","dataintro":"Deja tu mensaje y te lo responderemos"}]

	}
		




});

var index= new Vue({
	el:'#navIndex2',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":"active","datastep":"1","dataintro":"Muestra la pagina princial"},{"href":"about.html","nombre":"Sobre Nosotros","class":"","datastep":"2","dataintro":"Aqui podras encontrar todo sobre nosotros"},
		{"href":"speakers.html","nombre":"Docentes","class":"","datastep":"3","dataintro":"Aqui encontraras los profesores del conservatorio"},{"href":"events.html","nombre":"Eventos","class":"","datastep":"4","dataintro":"Detalles sobre los proximos eventos"},
		{"href":"news.html","nombre":"Cursos","class":"","datastep":"5","dataintro":"Conoce todo sobre nuestros programas"},{"href":"developers.html","nombre":"Equipo","class":"","datastep":"6","dataintro":"Conoce nuestro equipo de Desarrollo"},
		{"href":"contact.html","nombre":"Contáctanos","class":"","datastep":"7","dataintro":"Deja tu mensaje y te lo responderemos"}]

	}
		




});

var speakers= new Vue({
	el:'#navSpeakers',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":"active"},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});
var speakers= new Vue({
	el:'#navSpeakers2',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":"active"},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});

var news= new Vue({
	el:'#navNews',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":"active"},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});
var news= new Vue({
	el:'#navNews2',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":"active"},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});

var about= new Vue({
	el:'#navEvents',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":"active"},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});
var about= new Vue({
	el:'#navEvents2',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":"active"},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});

var developers= new Vue({
	el:'#navDevelopers',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":"active"},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});
var developers= new Vue({
	el:'#navDevelopers2',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":"active"},
		{"href":"contact.html","nombre":"Contáctanos","class":""}]

	}
		




});

var developers= new Vue({
	el:'#navContact',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":"active"}]

	}
		




});
var developers= new Vue({
	el:'#navContact2',

	data: {
		navBar:[{"href":"index.html","nombre":"Inicio","class":""},{"href":"about.html","nombre":"Sobre Nosotros","class":""},
		{"href":"speakers.html","nombre":"Docentes","class":""},{"href":"events.html","nombre":"Eventos","class":""},
		{"href":"news.html","nombre":"Cursos","class":""},{"href":"developers.html","nombre":"Equipo","class":""},
		{"href":"contact.html","nombre":"Contáctanos","class":"active"}]

	}
		




});


var vm = new Vue({
   el: '#login',
   components:{
      'searchcomponent': {
         template : `<div class="header_extra ml-auto">
												<div class="header_search"><i class="fa fa-search" aria-hidden="true"></i></div>
												<div class="button header_button"><a href="cms/login.html">Ingresar</a></div>
											</div>`
      }
   }
});


var vm = new Vue({
   el: '#search',
   components:{
      'componentsearch2': {
         template : `<div class="container">
								<div class="row">
									<div class="col">
										<div class="search_content d-flex flex-row align-items-center justify-content-end">
											<form action="#" id="search_container_form" class="search_container_form">
												<input type="text" class="search_container_input" placeholder="Search" required="required">
												<button class="search_container_button"><i class="fa fa-search" aria-hidden="true"></i></button>
											</form>
										</div>
									</div>
								</div>
							</div>`
      }
   }
});





