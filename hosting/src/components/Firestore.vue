<template>
 <div>
<<<<<<< HEAD
   <div>誰かさんの正答数一覧</div>
=======
   <div>2{{ Id }}の正答数一覧</div>
>>>>>>> login
   <li 
     v-for="post in posts"
     :key="post.id"
     class="list-none my-5"
   >
     <h2 class="text-xl">{{ post.score }}</h2>
     <p class="text-sm">{{ post.date }}</p>
   </li>
 </div>
</template>

<script>
import { db } from '@/main'
export default {
  props:{
    Id: String
  },
  data() {
    return {
      posts: []
    }
  },
  firestore() {
    return {
      posts: db.collection("2"+this.Id)
    }
  }
}
</script>