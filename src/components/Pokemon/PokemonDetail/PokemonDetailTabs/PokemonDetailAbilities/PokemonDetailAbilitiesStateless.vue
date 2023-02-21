<template>
  <ion-grid>
    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Species</ion-col>
      <ion-col class="text-transform-capitalize text-body-medium color-dark">{{ pokemon.species.name }}</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Height</ion-col>
      <ion-col class="text-body-medium color-dark">{{ convertNumberToFootInch(pokemon.height*10) }} ({{ pokemon.height*10 }}cm)</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Weight</ion-col>
      <ion-col class="text-body-medium color-dark">{{ pokemon.weight }}kg ({{ convertKilogramToPound(pokemon.weight) }}lbs)</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Abilities</ion-col>
      <ion-col class="text-body-medium color-dark">{{ pokemon.abilities.length }}</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Experience</ion-col>
      <ion-col class="text-body-medium color-dark">{{ pokemon.base_experience }}</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Type</ion-col>
      <ion-col class="text-body-medium color-dark d-flex d-align-items-center d-justify-content-space-between d-wrap">
        <span
          v-for="(type, i) in pokemon.types"
          :key="type.type.name"
          :class="`color-light mr-1 mb-1 ${ i%2===0 ? 'green' : 'purple' } pokemon-detail-abilities-chip`"
        >
          {{ type.type.name }}
        </span>
      </ion-col>
    </ion-row>
  </ion-grid>

</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { IonCol, IonGrid, IonRow } from '@ionic/vue'

import { PokemonsInterface } from '@/interfaces/pokemon'
import { convertNumberToFootInch, convertKilogramToPound } from '@/utils'

export default defineComponent({
  name: 'PokemonDetailAbilitiesStateless',

  components: { IonCol, IonGrid, IonRow },

  props: {
    pokemon: {
      type: Object as PropType<PokemonsInterface>,
      required: true
    }
  },

  data: () => ({
    convertNumberToFootInch,
    convertKilogramToPound
  })
})
</script>

<style scoped>
.pokemon-detail-abilities-chip {
  padding: 2px 10px;
  font-size: 14px;
  border-radius: 4px;
}

.green {
  background-color: #16C172;
}

.purple {
  background-color: #6E44FF;
}
</style>
