var buscar = document.getElementById("botonBuscar");

buscar.onclick = function searchfun() {
  var texto = $('#buscador').val();
  $(".events").each(function () {
    setVisible((this));
    var nombre = $(this).find("h5").text();
    if (!nombre.toUpperCase().includes(texto.toUpperCase())) {
      (this).style.visibility = 'hidden';
    }
  })

  return false;
};

function setVisible(object) {
 object.style.visibility="visible";  