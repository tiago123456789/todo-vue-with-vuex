<template>
  <div id="app">
    <AddTodo />
    <ListTodo />
  </div>
</template>

<script>
import ListTodo from './components/ListTodo.vue';
import AddTodo from './components/AddTodo.vue';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default {
  name: 'App',
  components: {
    ListTodo,
    AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
