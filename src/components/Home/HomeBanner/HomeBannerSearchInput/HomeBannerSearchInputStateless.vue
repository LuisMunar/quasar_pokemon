<template>
  <ion-item color="primary" class="d-flex d-align-items-center d-justify-content-center">
    <ion-label position="floating">Search pokemon</ion-label>
    <ion-input @input="handlerInputSearchPokemon($event)" @keyup.enter="searchPokemon()"></ion-input>
    <ion-button fill="clear" slot="end" @click="searchPokemon()">
      <ion-icon :icon="search" size="large" color="light"></ion-icon>
    </ion-button>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/vue'
import { search } from 'ionicons/icons'

export default {
  name: 'HomeBannerSearchInputStateless',

  components: {
    IonItem, IonLabel, IonInput, IonButton, IonIcon
  },

  props: {
    handlerInputSearchPokemon: {
      type: Function,
      required: true
    },
    searchPokemon: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      search
    }
  }
}
</script>

<style scoped>
ion-item {
  --ion-color-base: none !important;
  --ion-color-shade: none !important;
}
</style>
