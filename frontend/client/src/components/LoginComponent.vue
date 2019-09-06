<template>
	<div>
		<h1>Sign In</h1>
		<form class="mainLogin">
			<h1>Sign In</h1>
			<div class="field-container">
				<label for="field_user">User Name or Email</label>
				<input type="text" class="form-control" v-model="post.user">
			</div>
			<div class="field-container">
				<label for="field_password">Password</label>
				<input class="field" name='password' type="password" id='field_password' required/>
			</div>
			<div class="form-group">
				<router-link :to="{name: 'usuario', params: {user: this.post.user}}" class="btn btn-success">Ingresar</router-link>
			</div>
		</form>
	</div>
</template>

<style>
  .mainLogin
  {
    width: 100%;
    height: 100%;
    margin-top: 200px;
  }
</style>

<script>
    export default {
        data(){
        return {
          post:{
          }
        }
    },
  }
</script>
