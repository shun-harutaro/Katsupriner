<template>
 <div>
   <h1>あ</h1>
    <h1 class="font-medium">{{ name }}の第{{ post.id }}回成績表</h1>
    <p class="text-sm">{{ post.date }}</p>
    <button v-if="name" class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
     <a :href="url">模範解答へ</a>
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
  firestore() {
    return {
      posts: db.collection(this.$store.getters["name"])
    }
  }
}
</script>