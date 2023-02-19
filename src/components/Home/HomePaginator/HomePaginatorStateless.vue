<template>
  <div class="background-light p-2 d-flex d-align-items-center d-justify-content-space-between">
    <ion-button fill="clear">
      <ion-icon :icon="chevronBackOutline" size="large" color="primary"></ion-icon>
    </ion-button>
    <ion-button fill="clear">1</ion-button>
    <ion-button fill="solid">2</ion-button>
    <ion-button fill="clear">3</ion-button>
    <ion-button fill="clear">
      <ion-icon :icon="chevronForwardOutline" size="large" color="primary"></ion-icon>
    </ion-button>
  </div>
</template>

<script lang="ts">
import { IonIcon, IonButton } from '@ionic/vue'
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons'

export default {
  name: 'HomePaginatorStateless',

  components: { IonIcon, IonButton },

  data() {
    return {
      chevronBackOutline,
      chevronForwardOutline
    }
  }
}
</script>

<style scoped>
</style>
