<template>
  <div class="px-14 mb-6 w-100 d-flex align-center justify-space-between">
    <h1 class="vh-title">Posts</h1>

    <v-btn-toggle v-model="vTogglePosts" variant="plain">
      <v-btn value="photos" text="Photos" />
      <v-btn value="videos" text="Videos" />
      <v-btn value="all" text="All" />
    </v-btn-toggle>

    <div class="d-flex align-center">
      Total 13
      <v-btn variant="text" icon="mdi-filter-variant" />
    </div>
  </div>

  <MainCarousel :columns="4" />
</template>

<script setup lang="ts">
import { TogglePosts } from '@/utils/types/tMainContent';
import MainCarousel from '@/components/MainCarousel.vue';
import { ref } from 'vue';

const vTogglePosts = ref<TogglePosts>('all');
</script>