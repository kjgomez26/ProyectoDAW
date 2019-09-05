<template>
	<div>
		<div class="container">
			<div class="row">
				<h1>Grafico de la cantidad de estudiantes por la categoria de cursos</h1>
				<h1 class="mainGrafic">Grafico de la cantidad de estudiantes por la categoria de cursos</h1>
					<object width="700" height="700" data="grafico.html" class="mainGrafic"></object>
					<h1>Grafico de la cantidad de eventos asistidos por usuario</h1>
					<object width="700" height="700" data="grafico2.html"></object>
					<h1>Grafico de la cantidad de curso registrados por usuario</h1>
					<object width="700" height="700" data="grafico3.html"></object>
			</div>
		</div>
	</div>
</template>

<style>
 
  .bar{
    fill: steelblue;
  }
 
  .bar:hover{
    fill: brown;
  }
 
    .axis {
      font: 10px sans-serif;
    }
 
    .axis path,
    .axis line {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }
 
</style>

<style>
.mainGrafic
{
  margin-top:200px;
}
</style>