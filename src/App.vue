<!--
Loads the index.html page, everything comes through main.js, and through main App.vue (this)
-->

<!-- Markup, output -->
<template>
  <div id="app">
    <!--
      Embed DisplayTodos.vue
    Display todo objects (todoItems), pass it in with a directive (V bind)
    Bind the tasksToDo (we just called it that, it could be called something else)
    Pass in todoItems from the data as a prop
    1st word can be anything, 2nd must match what we called it in data ()
    -->
    <Todos v-bind:tasksToDoProp="todoObj"/>
    
  </div>
</template>

<!-- Store data from 'todo' list in components as objects -->
<script>
import Todos from './components/Todos'

export default {
  name: 'app',
  components: {
    Todos
  },
  data (){
    return {
      // array of objects
      todoObj: [
        {
            id: 1,
            title: "Item 1",
            completed: false
        },
        {
            id: 2,
            title: "Item 2",
            completed: true
        }
      ]
    }
  }
}
</script>

<!-- Global to app -->
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
