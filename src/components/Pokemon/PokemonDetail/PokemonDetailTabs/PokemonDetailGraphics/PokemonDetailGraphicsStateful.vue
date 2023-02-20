<template>
  <pokemon-detail-graphics-stateless :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script lang="ts">
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

import PokemonDetailGraphicsStateless from '@/components/Pokemon/PokemonDetail/PokemonDetailTabs/PokemonDetailGraphics/PokemonDetailGraphicsStateless.vue'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
ChartJS.defaults.font.size = 12
ChartJS.defaults.font.family = 'Roboto-Medium'

export default {
  name: 'PokemonDetailGraphicsStateful',

  components: { PokemonDetailGraphicsStateless },

  data: () => ({
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
    },
    chartData: {
      labels: [ 'Speed', 'Sp Defense', 'Sp Attack', 'Defense', 'Attack', 'HP' ],
      datasets: [
        {
          data: [40, 20, 12, 22, 31, 18],
          borderColor: '#072AC8',
          backgroundColor: '#072AC8',
        }
      ]
    }
  })
}
</script>
