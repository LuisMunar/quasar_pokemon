<template>
  <ion-page>
    <detail-component />
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue'
import DetailComponent from '@/components/Details/DetailComponent.vue'

export default {
  name: 'DetailPage',

  components: {
    IonPage,
    DetailComponent
  }
}
</script>
