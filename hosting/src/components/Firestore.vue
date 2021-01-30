<template>
 <div>
   <h1 class="font-medium">{{ name }}の正答数一覧</h1>
   <p class="text-sm">各回の数字をクリックすると模範解答にリンクします</p>
   <li 
     v-for="post in posts"
     :key="post.id"
     class="list-none my-5"
   ><router-link to="/share">
     <p class="text-sm">第{{ post.id }}回</p>
     <h2 class="text-xl">{{ post.score }}</h2>
     <p class="text-sm">{{ post.date }}</p>
    </router-link>
   </li>
    <button v-if="name" class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
     <a :href="url">基礎解析Ⅱのページへ</a>
    </button>
 </div>
</template>

<script>
import { db } from '@/main'

export default {
  computed:{
    name(){
      return this.$store.getters["name"];
    },
    link: function() {
      return function(times){
        var Id = this.$store.getters["name"];
        return process.env.VUE_APP_PROFESSORS_URL+'wkprntans/l'+Id.slice(0,2)+'/'+Id+'ans'+times+'.pdf'
      }
    }
  },
  data() {
    return {
      url: process.env.VUE_APP_PROFESSORS_URL,
      posts: [],
      labels: [],
      datasets: [
        {
          label: "Score",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.8)",
          borderColor: "red"
        }
      ]
    }
  },
  firestore() {
    return {
      posts: db.collection(this.$store.getters["name"])
    }
  }
}
</script>