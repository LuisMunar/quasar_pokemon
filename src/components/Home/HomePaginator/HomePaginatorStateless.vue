<template>
  <div v-if="showPaginator" class="background-light p-2 d-flex d-align-items-center d-justify-content-center">
    <ion-button fill="clear" :disabled="pageSelected < 1" @click="setPageSelected(previousPage)">
      <ion-icon :icon="chevronBackOutline" size="large" color="primary"></ion-icon>
    </ion-button>

    <ion-button
      v-for="(buttonNumber, i) in paginatorQuantityButtons"
      :key="i"
      :fill="pageSelected === buttonNumber ? 'solid' : 'clear'"
      @click="setPageSelected(buttonNumber)"
    >
      {{ buttonNumber + 1 }}
    </ion-button>

    <ion-button fill="clear" :disabled="nextPage === 0" @click="setPageSelected(nextPage)">
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
    },
    previousPage: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Number,
      required: true
    },
    showPaginator: {
      type: Boolean,
      required: true
    }
  } as any,

  data: () => ({
    chevronBackOutline,
    chevronForwardOutline
  })
}
</script>

<style scoped>
</style>
