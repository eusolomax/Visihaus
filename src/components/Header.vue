<template>
  <div style="height: 60px;" class="px-6 d-flex align-center justify-space-between w-100 bg-grey-darken-4">
    <!-- Header Left -->
    <div class="d-flex align-center justify-space-between w-27">
      <img class="cursor-pointer" @click="router.push({ name: 'home' })" :src="logoSource" height="43" />
      <div class="d-flex align-center justify-space-between w-65">
        <h4 :class="{ 'opacity-100': route().name === 'home' }" @click="router.push({ name: 'home' })"
          class="cursor-pointer opacity-50 font-weight-medium">Home</h4>
        <h4 :class="{ 'opacity-100': route().name === 'explore' }" @click="router.push({ name: 'explore' })"
          class="cursor-pointer opacity-50 font-weight-medium">Explore</h4>
        <h4 :class="{ 'opacity-100': route().name === 'trends' }" @click="router.push({ name: 'trends' })"
          class="cursor-pointer opacity-50 font-weight-medium">Trends</h4>
        <h4 :class="{ 'opacity-100': route().name === 'community' }" @click="router.push({ name: 'community' })"
          class="cursor-pointer opacity-50 font-weight-medium">Community
        </h4>
      </div>
    </div>

    <!-- Header Middle -->
    <div style="width: 30%;" class="d-flex align-center justify-center">
      <HeaderSearchMechanism />
    </div>

    <!-- Header Right -->
    <div class="d-flex align-center justify-end w-27">
      <v-btn prepend-icon="mdi-message-question-outline" text="FAQ" variant="plain" density="compact" size="small" />
      <v-btn variant="plain" :rounded="false" density="comfortable" prepend-icon="mdi-plus" width="110"
        size="large">Create</v-btn>
      <v-avatar size="small" class="ml-3" image="https://thispersondoesnotexist.com/" />
    </div>
  </div>
</template>

<script setup lang="ts">
import logoSource from "@/assets/logo1-white.png";
import HeaderSearchMechanism from "./HeaderSearchMechanism.vue";
import router from "@/router";
import { useRoute as route } from "vue-router";
import { onMounted } from "vue";
</script>

<style scoped>
.w-27 {
  width: 27%;
}

.w-65 {
  width: 65%;
}
</style>