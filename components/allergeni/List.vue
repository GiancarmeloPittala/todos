<template>
  <div class="mx-4 flex flex-col gap-4">
    <div v-for="allergen of allergenStore.allergens" :key="allergen.id">
      {{ allergen.title }}
    </div>
  </div>
</template>

<script setup>
import { useAllergenStore } from '@/stores/allergen';
const allergenStore = useAllergenStore();



</script>