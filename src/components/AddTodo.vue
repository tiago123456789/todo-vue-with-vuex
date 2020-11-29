<template>
  <div class="row">
    <form class="col-md-10 offset-1" @submit.prevent="submit()">
      <div class="row">
        <div class="form-group col-md-11">
          <input v-model="newTodo" type="text" class="form-control" />
        </div>

        <div class="form-group col-md-1" style="margin-left: -38px">
          <button class="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data: () => ({
      newTodo: ""
  }),
  methods: {
    ...mapActions(["addTodo"]),
    submit() {
        this.addTodo(this.newTodo);
        this.newTodo = "";
    }
  }
};
</script>

<style scoped>
</style>