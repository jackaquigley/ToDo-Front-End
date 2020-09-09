<template lang="html">
  <div class="toDoList">
    <todo-list v-for="(todo, index) in todos" :key="index" :todo="todo" />
    <todo-form />
  </div>
</template>

<script>

import ToDoForm from '@/components/ToDoForm.vue'
import ToDoList from '@/components/ToDoList.vue'
import ToDoService from '@/services/ToDoService.js'
import {eventBus} from '@/main.js'

export default {
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    ToDoService.getToDos()
    .then(todos => this.todos = todos);

    eventBus.$on('todo-added', (todo) => {
      this.todos.push(todo)
    })

    eventBus.$on('todo-updated', (todo) => {
      const index = this.todos.findIndex(todoItem => todoItem._id === todo._id)
      this.todos.splice(index, 1, todo)
    })
  },
  components: {
    'todo-list': ToDoList,
    'todo-form': ToDoForm
    }
  }
</script>

<style lang="css">

.toDoList {
  display: flex;
}


</style>
