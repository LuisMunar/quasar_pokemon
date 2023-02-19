<template>
  <ion-item color="primary" class="d-flex d-align-items-center d-justify-content-center">
    <ion-label position="floating">Search pokemon</ion-label>
    <ion-input @input="handlerSearchInput($event)" @keyup.enter="searchPokemon($event)"></ion-input>
    <ion-icon :icon="search" size="large" slot="end" color="light"></ion-icon>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonLabel, IonInput, IonIcon } from '@ionic/vue'
import { search } from 'ionicons/icons'

export default {
  name: 'HomeBannerSearchInputStateless',

  components: {
    IonItem, IonLabel, IonInput, IonIcon
  },

  props: {
    handlerSearchInput: {
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
