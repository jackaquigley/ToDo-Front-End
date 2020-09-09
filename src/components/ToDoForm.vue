<template lang="html">
  <div id="addToDo">
    <div id="toDoWrapper">
    <p>Add An Item</p>
    <hr>
    <form class="" v-on:submit.prevent="addToDo" method="post">
    <input type="text" id="toDoName" value="ToDo Name" v-model="name">
    <input type="submit" name="button">
    </form>
    </div>
  </div>
</template>

<script>

import ToDoService from '@/services/ToDoService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'todo-form',
  data(){
    return {
      name: '',
      completed: false
    }
  },
  methods: {
    addToDo(){
      const newToDo = {
        name: this.name,
        completed: this.completed
      }
      ToDoService.postToDo(newToDo)
      .then(todo => eventBus.$emit('todo-added', todo))
    }
  }
  }

</script>

<style lang="css">

#addToDo {
  margin-left: 12px;
  margin-right: 12px;
  width: 122px;
  text-align: center;
  height: 166px;
}

#toDoWrapper {
  width: 166px;
  border: 1px solid black;
  height: 166px;
}

#toDoName {
  margin: 6px;
  text-align: center;
}

</style>
