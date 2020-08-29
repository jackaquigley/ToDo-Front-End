<template lang="html">
  <div class="toDoList">
    <todo-list v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>
</template>

<script>

import ToDoList from '@/components/ToDoList.vue'
import ToDoService from '@/services/ToDoService.js'

export default {
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    ToDoService.getToDos()
    .then(todos => this.todos = todos);
    },
  components: {
    'todo-list': ToDoList
    }
  }
</script>

<style lang="css">
</style>
