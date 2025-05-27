<template>
  <div class="d-flex flex-column align-center w-100">
    <!-- Banner -->
    <div
      :style="{ backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/05ed69a3073def34d0c350abc18b4339/0a684ed1-e7bd-407d-93db-0ae8d1b86c34_rwc_0x0x1366x212x1366.jpg?h=26ebe7c0e4f4ecb644484b961f095c13)' }"
      style="height: 260px; background-size: cover;" class="w-100 bg-grey-darken-4" />

    <!-- Profile Picture -->
    <div style="height: 250px; width: 320px; top: 190px;" class="d-flex flex-column align-center position-absolute">
      <div :style="{ backgroundImage: 'url(https://i.pinimg.com/736x/d9/9b/84/d99b84870e5f38edeebec5a2e04e2bd2.jpg)' }"
        style="height: 150px; width: 150px; background-size: cover; border: solid 1px white ;" class="rounded" />

      <h1 class="vh-title" style="height: 48px;">Hawk Bigg</h1>
      <h3 class="opacity-60 font-weight-medium">@hawkbigg</h3>
    </div>
  </div>

  <div style="height: 200px;" class="d-flex align-start justify-space-between w-100 pa-4">
    <div class="w-40">
      <v-btn :rounded="false" density="comfortable" prepend-icon="mdi-account-multiple-plus-outline" width="130"
        size="x-large">Follow</v-btn>
      <v-btn :rounded="false" icon="mdi-email-outline" density="compact" class="ml-2" />
    </div>

    <!-- Info Stats -->
    <div class="w-40 d-flex justify-space-between">
      <div class="d-flex">
        <div v-for="(info, index) of userData.infoStats" :class="{ 'mr-8': index < userData.infoStats.length - 1 }">
          <h3 class="opacity-60" style="height: 23px;">{{ info.title }}</h3>
          <h1>{{ info.value }}</h1>
        </div>
      </div>

      <div class="d-flex flex-column">
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