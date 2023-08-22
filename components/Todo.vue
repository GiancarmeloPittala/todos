<template>
  <div class=" p-1 px-4 border-l-4 flex justify-between items-center  " 
  :class="{ 'border-teal-400': todo.completed, 'border-gray-200': !todo.completed }">
    <p> {{ todo.text }} </p> 
    
    <button class="border rounded-lg border-teal-400 px-3 py-1.5" @click="clicked"> cliccami</button>
    
  </div>
</template>

<script setup>
import { useTodosStore } from '@/stores/todos';
const todosStore = useTodosStore();

const props = defineProps({
  todo: Object
})

function clicked() {
  todosStore.set_todo(props.todo.id)
}
</script>
