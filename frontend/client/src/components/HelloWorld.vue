<template>
<div class="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
  <ol class="carousel-indicators">
    <li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
        <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
        <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active"><img alt="First slide" class="d-block w-100" src="https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2019/01/concieto.png?itok=2aWb5UTC"></div>
    <div class="carousel-item"><img alt="Second slide" class="d-block w-100" src="https://images.unsplash.com/photo-1519412666065-94acb3f8838f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></div>
    <div class="carousel-item"><img alt="Third slide" class="d-block w-100" src="https://images.unsplash.com/photo-1497405417022-3fefbce30a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></div>
  </div>
  <a class="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>
