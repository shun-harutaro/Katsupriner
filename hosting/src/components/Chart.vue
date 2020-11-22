<template>
  <div>
    <canvas id="myChart" width="800px" height="600px"></canvas>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import { db } from '@/main';
export default {
  name: 'chart',
  extends: Line,
  mounted() {
    const scoresRef = db.collection(this.$store.getters["name"]);
    function getData(){
      scoresRef.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          let item = doc.data();
          let score = item.score;
          let date = item.date;
          addData(myChart,score,date);
        })
      })
    }

    let config = {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "正答数",
            data: [],
            backgroundColor: "rgba(50,50,255,0.1)",
            borderColor: '#CFD8DC',
            fill: false,
            lineTension: 0
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "正答数の推移",
          fontSize: 20
        },
        scales:{
          yAxes:[
            {
              ticks: {
                max: 150
              }
            }
          ]
        }
      }
    }
    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, config);
    function addData(chart, score, date) {
      console.log(score, date);
      chart.data.labels.push(date);
      chart.data.datasets.forEach(dataset => {
        dataset.data.push({
          x: date,
          y: score
        });
      });
      chart.update();
    }
    getData();
  }
};
</script>
