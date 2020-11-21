<template>
 <div>
   <Chart :labels="labels" :datasets="datasets"/>
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
import Chart from '@/components/Chart'

export default {
  components:{
     Chart
  },
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
    let scores = null;
    let dates = null;
    const scoresRef = db.collection(this.$store.getters["name"]);
    function getData(){
      scoresRef.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          let item = doc.data();
          let score = item.score;
          let date = item.date;
          if (score !== undefined && date !== undefined){
            dataArr = {
              score: score,
              date: date
            };
            addData(myChart, dataArr.score,dataArr.date);
          }
        })
      })
    }
    return {
      posts: scoresRef
    }
  }
}
</script>