<template>
  <div>
    <form
    class="mb-4 px-4"
    v-on:submit.prevent="onSubmit"
    >
      <ul class="py-2 px-4">
        <li class="p-2">
          <span>ID : </span>          
          <input
            class="p-2 border"
            type="text"
            placeholder="input your id"
            v-model="loginForm.loginId"
            >
        </li>
        <li class="p-2">
          <span>URL : </span>
			    <input
            class="p-2 border"
			  	  type="password"
			  	  placeholder="input URL of site"
			  	  v-model="loginForm.url"
			  	  >
        </li>
          <p class="error">
            {{ Validation.loginReult }}
          </p>
        </ul>
        <button 
          v-on:click="checkFrom"
          class="ml-2 p-2 rounded text-white bg-green-500"
          >
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
        this.$store.dispatch("login", this.loginForm.loginId);
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

<style lang="stylus">
.error { color: red; }
</style>