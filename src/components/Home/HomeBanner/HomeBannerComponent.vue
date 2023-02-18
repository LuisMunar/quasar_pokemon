<template>
  <div class="home-banner px-3 pt-5 pb-2">
    <h1 class="text-subtitle-one color-light mb-2">What pokemon are you looking for?</h1>

    <div class="d-flex d-align-items-center .d-justify-content-space-between">
      <home-banner-search-input-stateful />
      <home-banner-filter-button-stateful />
    </div>
  </div>
</template>

<script lang="ts">
import HomeBannerSearchInputStateful from '@/components/Home/HomeBanner/HomeBannerSearchInput/HomeBannerSearchInputStateful.vue'
import HomeBannerFilterButtonStateful from '@/components/Home/HomeBanner/HomeBannerFilterButton/HomeBannerFilterButtonStateful.vue'

export default {
  name: 'HomeBannerComponent',

  components: {
    HomeBannerSearchInputStateful,
    HomeBannerFilterButtonStateful
  }
}
</script>

<style scoped>
.home-banner {
  background-image: url('@/assets/images/banner/banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 31vh;
}

ion-item {
  --ion-color-base: none !important;
  --ion-color-shade: none !important;
}
</style>
