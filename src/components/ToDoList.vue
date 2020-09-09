<template lang="html">
  <div class="toDoItem">
    <div>
    <p>{{todo.name}}</p>
    <hr>
    </div>
    <button v-if="todo.completed" class="completedToDo" v-on:click="undoCompleteToDo(todo)">Completed</button>
    <button v-if="!todo.completed" class="notCompletedToDo" v-on:click="completeToDo(todo)">Not Completed</button>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'
import ToDoService from '@/services/ToDoService.js'

export default {
  name: 'todo-list',
  props: ['todo'],
  methods: {
    completeToDo(todo){
      const completedToDo = {
        completed: true
      }

      ToDoService.updateToDo(todo._id, completedToDo)
      .then(completedToDo => eventBus.$emit('todo-updated', completedToDo))
    },
    undoCompleteToDo(todo){
      const uncompletedToDo = {
        completed: false
      }

      ToDoService.updateToDo(todo._id, uncompletedToDo)
      .then(uncompletedToDo => eventBus.$emit('todo-updated', uncompletedToDo))
    }
  }
  }
</script>

<style lang="css">

.toDoItem {
  margin-left: 12px;
  margin-right: 12px;
  width: 166px;
  text-align: center;
  height: 166px;
}

p {
  font-size: 22px;
}

.completedToDo {
  background-color: yellow;
  height: 44px;
}

.notCompletedToDo {
  background-color: pink;
  height: 44px;
}

.todoButton {
  text-align: center;
}

</style>
