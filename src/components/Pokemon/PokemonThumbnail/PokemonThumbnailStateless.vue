<template>
  <ion-card class="w-9 my-3 mx-auto pokemon-thumbnail" @click="goToPokemonDetail()">
    <div class="d-flex d-align-items-center d-justify-content-center pokemon-thumbnail-content-image">
      <img alt="pokemon" src="@/assets/images/pokemons/bulbasaur.png" />
    </div>

    <ion-card-header class="p-2">
      <ion-card-title class="text-subtitle-one">Bulbasaur</ion-card-title>
      <ion-card-subtitle class="text-body-regular"># 01</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <div class="mb-1">
        <span class="mr-3 text-body-regular">Moves <span class="text-body-regular color-secondary">83</span></span>
        <span class="text-body-regular">Experience <span class="text-body-regular color-secondary">64</span></span>
      </div>

      <div>
        <ion-chip class="py-1 px-2 text-body-regular color-tertiary mr-1">
          <img alt="pokemon" src="@/assets/icons/grass.svg" class="pokemon-thumbnail-icon" />
          Grass
        </ion-chip>
        <ion-chip class="py-1 px-2 text-body-regular color-tertiary">
          <img alt="pokemon" src="@/assets/icons/bug.svg" class="pokemon-thumbnail-icon" />
          Bug
        </ion-chip>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip } from '@ionic/vue'

export default {
  name: 'PokemonThumbnailStateless',

  components: { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip },

  props: {
    goToPokemonDetail: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.pokemon-thumbnail {
  border-radius: 20px;
}

.pokemon-thumbnail-content-image {
  background-color: #ECECF2;
}

.pokemon-thumbnail-icon {
  height: 13px;
  width: 13px;
  margin-right: 4px;
}
</style>
