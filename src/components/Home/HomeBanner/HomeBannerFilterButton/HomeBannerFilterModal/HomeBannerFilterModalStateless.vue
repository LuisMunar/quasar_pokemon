<template>
  <ion-modal ref="filterModal" trigger="openFilterModal">
    <div class="py-4 px-3 home-banner-filter-modal">
      <ion-icon :icon="closeOutline" size="large" color="primary" @click="cancelFilterSearcher()"></ion-icon>

      <ion-title class="text-subtitle-one mt-1 mb-4">Filter pokemon list</ion-title>

      <ion-item color="tertiary" class="mb-2">
        <ion-select name="movenment" placeholder="Select movenment" class="w-full" @ionChange="handlerSelects($event)">
          <ion-select-option value="all">All</ion-select-option>
          <ion-select-option v-for="(move, i) in moves" :key="i" :value="move.url">{{ move.name }}</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item color="tertiary" class="mb-2">
        <ion-select :disabled="disabledInputExp" name="experience" placeholder="Select experience" class="w-full" @ionChange="handlerSelects($event)">
          <ion-select-option value="all">All</ion-select-option>
          <ion-select-option v-for="(exp, i) in experiences" :key="i" :value="exp+1">{{ exp+1 }}</ion-select-option>
        </ion-select>
      </ion-item>

      <div class="py-2 px-3 w-full d-flex d-align-items-center d-justify-content-space-between home-banner-filter-modal-content-buttons">
        <ion-button class="text-transform-capitalize text-subtitle-two home-banner-filter-modal-buttons" color="tertiary" @click="cancelFilterSearcher()">Cancel</ion-button>
        <ion-button
          class="text-transform-capitalize text-subtitle-two home-banner-filter-modal-buttons"
          color="primary"
          :disabled="disabledButton"
          @click="applyFilter()"
        >
          Filter
        </ion-button>
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
  IonIcon
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
    IonIcon
  },

  props: {
    moves: {
      type: Array,
      required: true
    },
    experiences: {
      type: Array,
      required: true
    },
    disabledInputExp: {
      type: Boolean,
      require: true
    },
    disabledButton: {
      type: Boolean,
      requried: true
    },
    handlerSelects: {
      type: Function,
      required: true
    },
    searchPokemonsByFilter: {
      type: Function,
      required: true
    }
  } as any,

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
      this.searchPokemonsByFilter()
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
