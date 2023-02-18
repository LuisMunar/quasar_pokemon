<template>
  <ion-page>
    <home-component />
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue'
import HomeComponent from '@/components/Home/HomeComponent.vue'

export default {
  name: 'HomePage',

  components: {
    IonPage,
    HomeComponent
  }
}
</script>
