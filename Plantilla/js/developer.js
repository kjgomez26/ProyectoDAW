$(document).ready(function () {
  $.ajax({
    url: "data/developers.xml",
    success: function (respuesta) {
      $(respuesta).find("developer").each(function () {
 			var div1 = $('<div></div>').addClass('row row-lg-eq-height');
 			var div2 = $('<div></div>').addClass('col-lg-6 speaker_col reset_col');
			var div3 = $('<div></div>').addClass('speaker_image');
			//div3.css("background-image","url(images/"+ $(this).find("image").text()+")");
			var div4 = $('<div></div>').addClass('col-lg-6');
			var div5 = $('<div></div>').addClass('speaker_content d-flex flex-column align-items-start justify-content-center');
			var div6 = $('<div></div>').addClass('speaker_title');
			div6.text($(this).find("nombre").text());
			var div7=$('<div></div>').addClass('speaker_subtitle');
			div7.text($(this).find("carrera").text());
			div5.append(div6);
			div5.append(div7);
			div4.append(div5);
			div2.append(div3);
			div1.append(div2);
			div1.append(div4);
			$("#resultadosdevelopers").append(div1);
      	});
    }
  });
});