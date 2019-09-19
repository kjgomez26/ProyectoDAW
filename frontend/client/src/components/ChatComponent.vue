<template>
	<div>
		<div class="container">
			<div class="row">
				<h1>Grafico de la cantidad de estudiantes por la categoria de cursos</h1>
				<h1 class="mainGrafic">Grafico de la cantidad de estudiantes por la categoria de cursos</h1>

        <form id="send-container">
          <input type="text" id="message-input">
          <button type="submit" id="send-button">Send</button>
        </form>
			</div>
		</div>
	</div>
</template>

<style>
    body {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
    }

    #message-container {
      width: 80%;
      max-width: 1200px;
    }

    #message-container div {
      background-color: #CCC;
      padding: 5px;
    }

    #message-container div:nth-child(2n) {
      background-color: #FFF;
    }

    #send-container {
      position: absolute;
      padding-bottom: 30px;
      bottom: 0;
      background-color: white;
      max-width: 1200px;
      width: 80%;
      display: flex;
    }

    #message-input {
      flex-grow: 1;
    }
  </style>

<style>
.mainGrafic
{
  margin-top:200px;
}
</style>