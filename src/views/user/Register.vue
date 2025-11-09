<template>
  <div style="height: 100dvh;" class="d-flex-center w-100">
    <div style="width: 800px; height: 600px;">
      <h1 class="vh-title">Welcome!</h1>
      <h2 class="font-weight-medium opacity-50">Create your artist profile, upload your work and connect with creatives.

        <div>
          <v-form ref="userForm">
            <v-text-field v-model="vName" :rules="defaultRule" label="Name" prepend-icon="mdi-account" type="text"
              variant="underlined" placeholder="Hawk Bigg" />
            <v-text-field v-model="vUsername" :rules="defaultRule" label="Username" prepend-icon="mdi-at" type="text"
              variant="underlined" placeholder="@hawkbigg" />
            <v-text-field v-model="vShortDesc" :rules="defaultRule" label="Short description" prepend-icon="mdi-text"
              type="text" variant="underlined" placeholder="To live will be an awfully big adventure" />
            <v-text-field v-model="vEmail" :rules="defaultRule" label="Email" prepend-icon="mdi-email" type="email"
              variant="underlined" placeholder="email@example.com" />
            <v-text-field v-model="vPassword" :rules="defaultRule" label="Password" prepend-icon="mdi-lock-outline"
              type="password" variant="underlined" />

            <v-btn :loading="vLoadingSubmit" class="bg-grey-darken-3 w-100" text="Create"
              @click="validateNewUserForm(userForm)" />
          </v-form>
        </div>
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createUser } from '@/services/userServices';
import { ref } from 'vue';

const userForm = ref();
const defaultRule = [(v: any) => !!v || 'Required field']
const vLoadingSubmit = ref<boolean>(false);
const vName = ref<string>('');
const vUsername = ref<string>('');
const vShortDesc = ref<string>('');
const vEmail = ref<string>('');
const vPassword = ref<string>('');

async function validateNewUserForm(form: any): Promise<void> {
  const { valid } = await form.validate();

  if (valid) createNewUser(vName.value, vUsername.value, vShortDesc.value, vEmail.value, vPassword.value);
  else return
};

function createNewUser(name: string, username: string, shortDesc: string, email: string, password: string): void {
  vLoadingSubmit.value = true;

  createUser(name, username, shortDesc, email, password).then((data: any) => {
    console.log(data);
    clearFields();
  }).finally(() => { vLoadingSubmit.value = false; })
}

function clearFields(): void {
  vName.value = '';
  vUsername.value = '';
  vShortDesc.value = '';
  vEmail.value = '';
  vPassword.value = '';
}

</script>
