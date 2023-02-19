<template>
  <ion-segment value="about" @ionChange="handlerPanelSelected($event)">
    <ion-segment-button value="about">
      <ion-label color="primary" class="text-subtitle-two text-transform-capitalize">About</ion-label>
    </ion-segment-button>
    <ion-segment-button value="moves">
      <ion-label color="primary" class="text-subtitle-two text-transform-capitalize">Moves</ion-label>
    </ion-segment-button>
  </ion-segment>

  <div v-if="panelSelected === 'about'" class="p-3">
    <pokemon-detail-abilities-stateful />
    <pokemon-detail-graphics-stateful />
  </div>

  <div v-if="panelSelected === 'moves'" class="p-3">
    <pokemon-detail-moves-stateful />
  </div>
</template>

<script lang="ts">
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue'

import PokemonDetailAbilitiesStateful from '@/components/Pokemon/PokemonDetail/PokemonDetailTabs/PokemonDetailAbilities/PokemonDetailAbilitiesStateful.vue'
import PokemonDetailGraphicsStateful from '@/components/Pokemon/PokemonDetail/PokemonDetailTabs/PokemonDetailGraphics/PokemonDetailGraphicsStateful.vue'
import PokemonDetailMovesStateful from '@/components/Pokemon/PokemonDetail/PokemonDetailTabs/PokemonDetailMoves/PokemonDetailMovesStateful.vue'

export default {
  name: 'PokemonDetailTabsStateless',

  components: { IonLabel, IonSegment, IonSegmentButton, PokemonDetailAbilitiesStateful, PokemonDetailGraphicsStateful, PokemonDetailMovesStateful },

  props: {
    panelSelected: {
      type: String,
      required: true
    },
    handlerPanelSelected: {
      type: Function,
      required: true
    }
  }
}
</script>
