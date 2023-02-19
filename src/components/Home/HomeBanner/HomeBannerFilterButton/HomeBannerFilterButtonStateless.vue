<template>
  <div class="ion-activatable ripple-parent p-1" id="openFilterModal">
    <ion-ripple-effect></ion-ripple-effect>
    <img src="@/assets/icons/filter.svg" alt="filter" class="icon-large">
  </div>
</template>

<script lang="ts">
import { IonRippleEffect } from '@ionic/vue'

export default {
  name: 'HomeBannerFilterButtonStateless',

  components: {
    IonRippleEffect
  }
}
</script>
