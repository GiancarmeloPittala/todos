<template>
  <div class="containe mx-auto">
    <div class="mx-4">
      <AllergeniFormCreate />
    </div>
    
   <AllergeniList />
  </div>
</template>

<script setup>
import { useAllergenStore } from '@/stores/allergen';
const allergenStore = useAllergenStore();

await allergenStore.init()


</script>