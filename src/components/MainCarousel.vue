<template>
  <div class="w-100 bg-red">
    <div class="px-9 w-100 grid">
      <div v-for="n in item">
        <div :style="{ 'height': n + 'px' }" class="bg-blue">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const item = ref([
  400,
  350,
  400,
  290,
  590,
  290,
  500,
  320,
  400,
  390,
  400,
  290,
  420,
  400,
  490,
  550,
  400,
]
);

defineProps<{ columns: number }>()
</script>

<style scoped>
.grid {
  min-width: 37rem;
  columns: v-bind(columns);
  gap: 1em;
}

.grid>* {
  margin-bottom: 1em;
}

/* Responsividade */
@media (max-width: 1200px) {
  .grid {
    columns: v-bind(columns - 1);
  }
}

@media (max-width: 900px) {
  .grid {
    columns: v-bind(columns - 2);
  }
}
</style>