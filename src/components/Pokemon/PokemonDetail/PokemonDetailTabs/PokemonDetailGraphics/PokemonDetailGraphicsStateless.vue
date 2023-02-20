<template>
  <h1 class="text-subtitle-two">Base stats</h1>

  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    height="250"
  />
</template>

<script lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
ChartJS.defaults.font.size = 12
ChartJS.defaults.font.family = 'Roboto-Medium'

export default {
  name: 'PokemonDetailGraphicsStateless',

  components: {
    Bar
  },

  data: () => ({
    chartData: {
      labels: [ 'Speed', 'Sp Defense', 'Sp Attack', 'Defense', 'Attack', 'HP' ],
      datasets: [
        {
          data: [40, 20, 12, 22, 31, 18],
          borderColor: '#072AC8',
          backgroundColor: '#072AC8',
        }
      ]
    },
    chartOptions: {
      responsive: true,
      indexAxis: 'y',
      scales: {
        x: {
          ticks: {
            color: '#8D91A5'
          }
        },
        y: {
          ticks: {
            color: '#8D91A5'
          }
        }
      }
    }
  })
}
</script>
