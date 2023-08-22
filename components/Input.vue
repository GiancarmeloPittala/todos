<template>
  <div class="flex gap-2 ">
    <input @keypress.enter="aggiungi" type="text" class=" px-2 border border-teal-500 rounded-lg w-full" v-model="input_text" />
    <button @click="aggiungi" class="border rounded-lg border-teal-400 px-3 py-1.5"> Aggiungi </button>
  </div>
</template>

<script setup>
import { useTodosStore } from '@/stores/todos';
const todosStore = useTodosStore();

const input_text = ref("");

function aggiungi() {
  const valore = input_text.value;
  if ( valore && valore.trim().length < 3 ) return;

  todosStore.push(input_text.value)
  input_text.value = "";
}

</script>