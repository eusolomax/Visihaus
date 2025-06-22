<template>
  <div style="height: 60px;" class="px-6 d-flex align-center justify-space-between w-100 bg-grey-darken-4">
    <!-- Logo (redirect home) & Options -->
    <div class="d-flex align-center justify-space-between w-27">
      <img class="cursor-pointer" @click="router.push({ name: 'Home' })" :src="logoSource" height="43" />
      <div class="d-flex align-center justify-space-between w-65">
        <h4 class="opacity-50 font-weight-medium">Home</h4>
        <h4 class="opacity-100 font-weight-medium">Explore</h4>
        <h4 class="opacity-50 font-weight-medium">Trends</h4>
        <h4 class="opacity-50 font-weight-medium">Community</h4>
      </div>
    </div>

    <!-- Search mechanism -->
    <div style="width: 30%;" class="d-flex align-center justify-center">
      <HeaderSearchMechanism />
    </div>

    <!-- Options -->
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
</script>

<style scoped>
.w-27 {
  width: 27%;
}

.w-65 {
  width: 65%;
}
</style>