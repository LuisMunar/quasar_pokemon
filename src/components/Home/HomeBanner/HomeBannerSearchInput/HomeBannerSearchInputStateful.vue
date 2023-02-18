<template>
  <home-banner-search-input-stateless :handler-search-input="handlerSearchInput" />
</template>

<script lang="ts">
import { InputEventInterface } from '@/interfaces/nativeEvents'
import HomeBannerSearchInputStateless from '@/components/Home/HomeBanner/HomeBannerSearchInput/HomeBannerSearchInputStateless.vue'

export default {
  name: 'HomeBannerSearchInputStateful',

  components: {
    HomeBannerSearchInputStateless
  },

  methods: {
    handlerSearchInput(e: InputEventInterface) {
      console.log('HANDLENING... => ', e.target.value)
    }
  }
}
</script>
