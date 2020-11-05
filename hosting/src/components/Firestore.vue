<template>
 <div>
   <div>{{ name }}の正答数一覧</div>
   <li 
     v-for="post in posts"
     :key="post.id"
     class="list-none my-5"
   ><a v-bind:href="`${ link(post.id) }`">
     <h2 class="text-xl">{{ post.score }}</h2>
     <p class="text-sm">{{ post.date }}</p>
    </a>
   </li>
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
      posts: []
    }
  },
  firestore() {
    return {
      posts: db.collection(this.$store.getters["name"])
    }
  }
}
</script>