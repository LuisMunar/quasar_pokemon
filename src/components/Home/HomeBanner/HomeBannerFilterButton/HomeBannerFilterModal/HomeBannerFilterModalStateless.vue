<template>
  <ion-modal ref="filterModal" trigger="openFilterModal">
    <div class="py-4 px-3 home-banner-filter-modal">
      <ion-icon :icon="closeOutline" size="large" color="primary" @click="cancelFilterSearcher()"></ion-icon>

      <ion-title class="text-subtitle-one mt-1 mb-4">Filter pokemon list</ion-title>

      <ion-item color="tertiary" class="mb-2">
        <ion-select placeholder="Select movenment number" class="w-full">
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item color="tertiary" class="mb-2">
        <ion-select placeholder="Select experience level" class="w-full">
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item color="tertiary" class="mb-2">
        <ion-select placeholder="Pokemon type" class="w-full">
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-chip class="p-2 text-body-regular background-tertiary">
        <ion-label color="light">Rock</ion-label>
        <ion-icon :icon="closeOutline" size="large" color="light"></ion-icon>
      </ion-chip>

      <ion-chip class="p-2 text-body-regular background-tertiary">
        <ion-label color="light">Fire</ion-label>
        <ion-icon :icon="closeOutline" size="large" color="light"></ion-icon>
      </ion-chip>

      <div class="py-2 px-3 w-full d-flex d-align-items-center d-justify-content-space-between home-banner-filter-modal-content-buttons">
        <ion-button class="text-transform-capitalize text-subtitle-two home-banner-filter-modal-buttons" color="tertiary" @click="cancelFilterSearcher()">Cancel</ion-button>
        <ion-button class="text-transform-capitalize text-subtitle-two home-banner-filter-modal-buttons" color="primary">Filter</ion-button>
      </div>
    </div>
  </ion-modal>
</template>

<script lang="ts">
import {
  IonModal,
  IonTitle,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonChip,
  IonLabel
} from '@ionic/vue'
import { closeOutline } from 'ionicons/icons'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomeBannerFilterModalStateless',

  components: {
    IonModal,
    IonTitle,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
    IonChip,
    IonLabel
  },

  data() {
    return {
      closeOutline
    }
  },

  methods: {
    cancelFilterSearcher() {
      (this.$refs.filterModal as any).$el.dismiss(null, 'canel')
    },
    
    applyFilter() {
      (this.$refs.filterModal as any).$el.dismiss('name', 'confirm')
    }
  }
})
</script>

<style scoped>
.home-banner-filter-modal {
  position: relative;
  height: 100vh;
}

.home-banner-filter-modal-content-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
}

.home-banner-filter-modal-buttons {
  width: 48%;
}
</style>
