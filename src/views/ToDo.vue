<template lang="html">
  <div class="component-wrapper">
    <p>ToDo.vue</p>
  </div>
</template>

<script>

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
    }
  }
</script>

<style lang="css">
</style>
