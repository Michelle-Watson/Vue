<template>
    <!-- Add div bc we need a root element -->
    <div>
        <!--
        _____ in: Can be named anything
        in ____: pertains to the props that are passed in
        Array: need to loop through the todoItems
        In 2.2.0+, when using v-for with a component, a key is now required.
        -->
       <div v-for="loopThruTasks in tasksToDoProp" :key="loopThruTasks.id"> >
           <!-- Output TodoItem, need to bind to a prop-->
           <TodoItem v-bind:loopThruTasks="loopThruTasks"/>
       </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: ["tasksToDoProp"] // accepting these as props, now have access to them in the template
}
</script>

<style scoped>

</style>