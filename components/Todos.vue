<template>
  <div class="flex flex-col gap-4">
    
    <Todo :todo="todo" v-for="todo,i of todos" :key="'todo' + i" />

  </div>
</template>

<script setup>
import { useTodosStore } from '@/stores/todos';
const todosStore = useTodosStore();

const todos = todosStore.todos;

</script>