<template>
  <ion-content :fullscreen="true">
    <home-banner-component />
  </ion-content>
</template>

<script lang="ts">
import { IonContent } from '@ionic/vue'
import HomeBannerComponent from '@/components/Home/HomeBanner/HomeBannerComponent.vue'

export default {
  name: 'HomeComponent',

  components: {
    IonContent,
    HomeBannerComponent
  }
}
</script>
