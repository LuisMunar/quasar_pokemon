<template>
  <ion-grid>
    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Species</ion-col>
      <ion-col class="text-body-medium color-dark">Seed</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Height</ion-col>
      <ion-col class="text-body-medium color-dark">2’3.”6 (0.70cm)</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Weight</ion-col>
      <ion-col class="text-body-medium color-dark">6.9kg (15.2lbs)</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Abilities</ion-col>
      <ion-col class="text-body-medium color-dark">Pending to know</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Experience</ion-col>
      <ion-col class="text-body-medium color-dark">24</ion-col>
    </ion-row>

    <ion-row class="mb-1">
      <ion-col class="text-body-regular color-tertiary">Type</ion-col>
      <ion-col class="text-body-medium color-dark d-flex d-align-items-center d-justify-content-space-between d-wrap">
        <span class="color-light mr-1 mb-1 green pokemon-detail-abilities-chip">Grass</span>
        <span class="color-light mr-1 mb-1 purple pokemon-detail-abilities-chip">Poison</span>
        <span class="color-light mr-1 mb-1 green pokemon-detail-abilities-chip">Grass</span>
        <span class="color-light mr-1 mb-1 purple pokemon-detail-abilities-chip">Poison</span>
        <span class="color-light mr-1 mb-1 green pokemon-detail-abilities-chip">Grass</span>
        <span class="color-light mr-1 mb-1 purple pokemon-detail-abilities-chip">Poison</span>
      </ion-col>
    </ion-row>
  </ion-grid>

</template>

<script lang="ts">
import { IonCol, IonGrid, IonRow } from '@ionic/vue'

export default {
  name: 'PokemonDetailAbilitiesStateless',

  components: { IonCol, IonGrid, IonRow }
}
</script>

<style scoped>
.pokemon-detail-abilities-chip {
  padding: 5px 10px;
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
