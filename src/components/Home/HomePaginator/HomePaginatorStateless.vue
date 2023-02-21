<template>
  <div class="background-light p-2 d-flex d-align-items-center d-justify-content-center">
    <ion-button fill="clear">
      <ion-icon :icon="chevronBackOutline" size="large" color="primary"></ion-icon>
    </ion-button>
    <ion-button
      v-for="(_, i) in paginatorQuantityButtons"
      :key="i"
      :fill="pageSelected === i ? 'solid' : 'clear'"
      @click="setPageSelected(i)"
    >
      {{ i+1 }}
    </ion-button>
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

  props: {
    paginatorQuantityButtons: {
      type: Array,
      required: true
    },
    pageSelected: {
      type: Number,
      required: true
    },
    setPageSelected: {
      type: Function,
      required: true
    }
  },

  data: () => ({
    chevronBackOutline,
    chevronForwardOutline
  })
}
</script>

<style scoped>
</style>
