<template>
  <div class="px-16">
    <MainHead />
    <v-divider :thickness="1" class="mx-10 mb-8" />
    <MainContent />
  </div>
</template>

<script lang="ts" setup>
import MainContent from '@/components/userProfile/MainContent.vue';
import MainHead from '@/components/userProfile/MainHead.vue';
</script>