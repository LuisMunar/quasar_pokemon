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

export default {
  name: 'PokemonDetailGraphicsStateless',

  components: {
    Bar
  },

  props: {
    chartOptions: {
      type: Object,
      required: true
    },
    chartData: {
      type: Object,
      required: true
    }
  }
}
</script>
