<template lang="html">
  <div class="toDoItem">
    <p>{{todo.name}}</p>
    <hr>
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

.toDoItem {
  margin-left: 12px;
  margin-right: 12px;
  width: 166px;
  text-align: center;
  height: 166px;
  border: 1px solid black;
}

p {
  font-size: 22px;
}

</style>
