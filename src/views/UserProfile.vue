<template>
  <MainHead />
  <v-divider :thickness="1" class="mx-10 mb-8" />
  <MainContent />
</template>

<script lang="ts" setup>
import MainContent from '@/components/userProfile/MainContent.vue';
import MainHead from '@/components/userProfile/MainHead.vue';
</script>