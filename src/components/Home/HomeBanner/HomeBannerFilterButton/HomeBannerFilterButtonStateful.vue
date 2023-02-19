<template>
  <home-banner-filter-button-stateless />
  <home-banner-filter-modalStateful />
</template>

<script lang="ts">
import HomeBannerFilterButtonStateless from '@/components/Home/HomeBanner/HomeBannerFilterButton/HomeBannerFilterButtonStateless.vue'
import HomeBannerFilterModalStateful from '@/components/Home/HomeBanner/HomeBannerFilterButton/HomeBannerFilterModal/HomeBannerFilterModalStateful.vue'

export default {
  name: 'HomeBannerFilterButtonStateful',

  components: {
    HomeBannerFilterButtonStateless,
    HomeBannerFilterModalStateful
  }
}
</script>