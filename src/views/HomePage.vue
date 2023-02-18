<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <p class="text-headline">Headline</p>
      <p class="text-subtitle-one">subtitle</p>
      <p class="text-subtitle-two">subtitle</p>
      <br>
      <p class="text-body-bold">subtitle</p>
      <p class="text-body-medium">subtitle</p>
      <p class="text-body-regular">subtitle</p>
      <br>
      <p class="text-caption-medium">subtitle</p>
      <p class="text-caption-regular">subtitle</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
</script>

<style scoped>
</style>
