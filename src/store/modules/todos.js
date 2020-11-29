import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    getTodos: async ({ commit }) => {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/todos`);
        commit("setTodos", response.data);
    },
    deleteTodo({ commit }, id) {
        commit("deleteTodo", id);
    },
    async completeTodo({ commit }, id) {
        await axios.put(`${process.env.VUE_APP_API_URL}/todos/${id}`, {
            "completed": true
        });
        commit("completeTodo", id);
    },
    async addTodo({ commit }, newTodo) {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/todos`, {
            title: newTodo, completed: false
        });
        commit("addTodo", response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    deleteTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    addTodo: (state, newTodo) => (state.tods = [...state.todos, newTodo]),
    completeTodo: (state, id) => {
        state.todos = state.todos.map(todo => {
            if (todo.id == id) {
                todo.completed = true;
            }
            return todo;
        });

        return state.todos;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}