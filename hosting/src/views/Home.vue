<template>
  <div id="home">
    <div v-if="name" id="login-inner">
      <Chart />
      <Firestore />
    </div>
    <div v-else id="logout-inner">
      <p>ログインしてください</p>
      <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
        <router-link to="/login">ログイン</router-link>
      </button>
    </div>
    
    
  </div>
</template>

<script>
  import Firestore from '@/components/Firestore'
  import Chart from '@/components/Chart'
  export default {
    components: {
      Chart,
      Firestore
    },
    computed: {
      name(){
        return this.$store.getters["name"];
      }
    }
  }
</script>