import { defineStore } from 'pinia'


export const useTodosStore = defineStore('todos', () => {

  const todos = ref([]);

  function set_todos(newTodos) {
    todos.value = newTodos
  }

  function push(new_todo) {
    todos.value.push({ text: new_todo, completed: false, id: Math.floor(Math.random() * 100000) })
  }

  function set_todo(id = 41508) {
    // ritorna il todo con id passato come props
    for (let i = 0; i < todos.value.length; i++)
      if (todos.value[i].id === id)
        todos.value[i].completed = !todos.value[i].completed


    // const todo = todos.value.find( todo => todo.id == id )
    // todo.completed = !todo.completed;
  }

  return { todos, set_todos, push, set_todo }

})