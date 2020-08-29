<template lang="html">
  <div class="toDoItem">
    <p>{{todo.name}}</p>
    <p>{{todo.completed}}</p>
  </div>
</template>

<script>

export default {
  name: 'todo-list',
  props: ['todo']
  }
</script>

<style lang="css">

</style>
