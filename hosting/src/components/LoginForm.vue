<template>
  <div>
    <form
    v-on:submit.prevent="onSubmit"
    >
      <span>ID : </span>          
      <input
        type="text"
        placeholder="input your id"
        v-model="loginForm.loginId"
        >
      <span>URL : </span>
			<input
				type="password"
				placeholder="input URL of site"
				v-model="loginForm.url"
				>
        <p class="error">
          {{ Validation.loginReult }}
        </p>
        <button v-on:click="checkFrom">
            Log In
        </button>
      </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      loginForm:{
				loginId:"",
				url:""
      },
      Validation:{
        loginReult: "",
      }
    }
  },
methods: {
    checkFrom: function(event){
      var LoginId = false

      if (!this.loginForm.url) {
        this.Validation.loginReult="URLを入力してください"
      } 
      else if(!this.checkString(this.loginForm.url)){
        this.Validation.loginReult="URLが正しくありません"
      }else {
        LoginId = true
      }
      if(LoginId == true){
        this.Validation.loginReult=""
        this.$router.push('/')
      } 
      event.preventDefault() 
    },
    checkString: function(inputdata){
      return inputdata==process.env.VUE_APP_PROFESSORS_URL
    }
  }
}
</script>

<style scoped>
.error { color: red; }
</style>