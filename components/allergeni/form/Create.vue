<template>
  <div class="flex my-8 flex-col gap-4">
    <input class="border border-gray-800 p-2 rounded-lg" v-model="title" placeholder="title" />
    <input class="border border-gray-800 p-2 rounded-lg" v-model="description" placeholder="description" />
    <div>
      <button @click="crea()" class="border px-3 py-1.5 border-teal-400">Crea</button>
    </div>
  </div>
</template>

<script setup>
import { useAllergenStore } from '@/stores/allergen';
const allergenStore = useAllergenStore();

const title = ref("")
const description = ref("")

async function crea(){
  try {
    await allergenStore.create(title.value, description.value)
  } catch (error) {
    // messaggio di errore
    console.error( error )
    alert("errore")
  }
}
</script>