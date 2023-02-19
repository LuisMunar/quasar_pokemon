<template>
  <pokemon-detail-tabs-stateless :panel-selected="panelSelected" :handler-panel-selected="handlerPanelSelected" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SegmentCustomEvent } from '@ionic/vue'
import PokemonDetailTabsStateless from '@/components/Pokemon/PokemonDetail/PokemonDetailTabs/PokemonDetailTabsStateless.vue'

export default defineComponent({
  name: 'PokemonDetailTabsStateful',

  components: { PokemonDetailTabsStateless },

  data: () => ({
    panelSelected: 'about' as any
  }),

  methods: {
    handlerPanelSelected(e: SegmentCustomEvent) {
      this.panelSelected = e.target.value
    }
  }
})
</script>
