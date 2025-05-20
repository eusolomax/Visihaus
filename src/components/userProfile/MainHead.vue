<template>
  <div class="d-flex flex-column align-center w-100 bg-yellow">
    <!-- Banner -->
    <div :style="{ backgroundImage: '' }" style="height: 260px; background-size: cover;" class="w-100 bg-red" />

    <!-- Profile Picture -->
    <div style="height: 250px; width: 320px; top: 190px;"
      class="d-flex flex-column align-center bg-blue position-absolute">
      <div :style="{ backgroundImage: '' }" style="height: 150px; width: 150px; background-size: cover;"
        class="bg-yellow" />

      <h1 class="vh-title" style="height: 48px;">Hawk Bigg</h1>
      <h3 class="opacity-60 font-weight-medium">@hawkbigg</h3>
    </div>
  </div>

  <div style="height: 200px;" class="d-flex align-start justify-space-between w-100 pa-4">
    <div class="w-40 bg-yellow">
      <v-btn :rounded="false" density="comfortable" prepend-icon="mdi-account-multiple-plus-outline" width="130"
        size="x-large">Follow</v-btn>
      <v-btn :rounded="false" icon="mdi-email-outline" density="compact" class="ml-2" />
    </div>

    <!-- Info Stats -->
    <div class="w-40 bg-yellow d-flex justify-space-between">
      <div class="d-flex">
        <div v-for="(info, index) of userData.infoStats" :class="{ 'mr-8': index < userData.infoStats.length - 1 }">
          <h3 class="opacity-60" style="height: 23px;">{{ info.title }}</h3>
          <h1>{{ info.value }}</h1>
        </div>
      </div>

      <div class="d-flex flex-column bg-red">
        <p class="font-italic opacity-60">"To live will be an awfully big adventure"</p>
        <div class="d-flex justify-end">
          <div v-for="social of userData.socials">
            <v-btn size="large" density="compact" variant="plain" :icon="'mdi-' + social.icon" />
          </div>
        </div>
      </div>

    </div>
  </div>
  <v-division />
</template>

<script setup lang="ts">
import { ref } from 'vue';

let userData = ref({
  infoStats: [
    {
      title: 'Followers',
      value: '153k'
    },
    {
      title: 'Following',
      value: '17'
    },
    {
      title: 'Posts',
      value: '13'
    },
  ],
  quote: 'To live will be an awfully big adventure',
  socials: [
    {
      title: 'Soundcloud',
      icon: 'soundcloud',
      link: 'https://soundcloud.com/eusolomax'
    },
    {
      title: 'Instagram',
      icon: 'instagram',
      link: 'https://soundcloud.com/eusolomax'
    },
    {
      title: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://soundcloud.com/eusolomax'
    }
  ]
})
</script>