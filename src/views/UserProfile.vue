<template>
  <div class="d-flex flex-column align-center w-100 bg-yellow">
    <!-- Banner -->
    <div :style="{ backgroundImage: '' }" style="height: 265px; background-size: cover;" class="w-100 bg-red" />
    <!-- Profile Picture -->
    <div style="height: 200px; width: 200px; top: 165px;" class="bg-blue position-absolute" />
  </div>

  <div style="height: 200px;" class="w-100 bg-purple">a</div>
  <v-division />
</template>

<script setup lang="ts"></script>