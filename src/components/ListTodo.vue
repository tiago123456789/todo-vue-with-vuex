<template>
  <div class="container">
    <div class="row">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        :class="{ 'card col-md-3 mb-1': !todo.completed, 'card col-md-3 mb-1 bg-success': todo.completed == true }"
        @dblclick="completeTodo(todo.id)"
      >
        <div class="card-body">
          {{ todo.title }} {{todo.completed}}
          <br />
          <button v-if="!todo.completed" @click="deleteTodo(todo.id)" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListTodo",
  methods: {
    ...mapActions(["getTodos", "deleteTodo", "completeTodo"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.getTodos();
  },
};
</script>

<style scoped>
</style>