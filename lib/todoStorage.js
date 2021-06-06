const TODO_STORAGE_KEY = 'TODOS';
export default {
  get() {
    const todos = window.localStorage.getItem(TODO_STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  },
  set(todos) {
    window.localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  }
};
