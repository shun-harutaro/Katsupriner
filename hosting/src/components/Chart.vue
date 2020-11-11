<script>
import { Bar } from 'vue-chartjs';
import { db } from '@/main'

export default {
  extends: Bar,
  name: 'chart',
  data () {
    return {
      data: {
        labels: ['2020/10/9', '2020/10/15', '2020/10/15', '2020/10/15', '2020/10/15', '2020/10/15'],
        datasets: [
          {
            label: 'Line Dataset',
            data: db.collection(this.$store.getters["name"]),
            borderColor: '#CFD8DC',
            fill: false,
            type: 'line',
            lineTension: 0,
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              min: 0,
              max: 150
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>