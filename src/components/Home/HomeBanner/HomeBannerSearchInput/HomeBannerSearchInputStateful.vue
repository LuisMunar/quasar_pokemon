<template>
  <home-banner-search-input-stateless :handler-search-input="handlerSearchInput" :search-pokemon="searchPokemon" />
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
    },

    searchPokemon(e: InputEventInterface) {
      console.log('SEARCHING... => ', e.target.value)
    }
  }
}
</script>
