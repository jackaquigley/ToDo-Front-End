<template lang="html">
  <div id="app">
    <header>
      <h1>ToDo App</h1>
    </header>
    <div id="mainPage">
      <todo />
    </div>
  </div>
</template>

<script>

import ToDo from '@/views/ToDo.vue';

export default {
  name: 'app',
  components: {
    'todo': ToDo
  }
}

</script>

<style lang="css">

</style>
