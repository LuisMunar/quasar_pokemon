<template>
  <home-banner-filter-button-stateless :open-filter-modal="openFilterModal" />
</template>

<script lang="ts">
import HomeBannerFilterButtonStateless from '@/components/Home/HomeBanner/HomeBannerFilterButton/HomeBannerFilterButtonStateless.vue'

export default {
  name: 'HomeBannerFilterButtonStateful',

  components: {
    HomeBannerFilterButtonStateless
  },

  methods: {
    openFilterModal() {
      console.log('OPENING_FILTER_MODAL...')
    }
  }
}
</script>