import storage from './lib/todoStorage.js';
const init = {
  cars: ['BMW'],
  colors: ['red', 'green', 'blue'],
  tasks: ['reading', 'writing'],
  archive: [],
  todos: storage.get(),
  filter: 'all',
  filters: {
    all: () => true,
    active: todo => !todo.completed,
    completed: todo => todo.completed
  }
};
// function merge(...objs) {
//   return Object.assign({}, ...objs);
// }
const actions = {
  add({ todos }, newTodo) {
    if (newTodo && newTodo.trim()) {
      todos.push({ title: newTodo.trim(), completed: false });
    }
    storage.set(todos);
  },
  toggle({ todos }, index) {
    const todo = todos[index];
    todo.completed = !todo.completed;
    storage.set(todos);
  },
  toggleAll({ todos }, completed) {
    todos.forEach(todo => (todo.completed = completed));
    storage.set(todos);
  },
  remove({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  switchFilter(state, newFilter) {
    state.filter = newFilter;
  }
};
export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
  // switch (action) {
  //   case 'ADD_TASK':
  //     const [value] = args;
  //     return merge(state, {
  //       tasks: [...state.tasks, value]
  //     });
  //   case 'COMPLETE_TASK':
  //     const { tasks, archive } = state;
  //     const [index] = args;
  //     const task = tasks[index];
  //     return Object.assign({}, state, {
  //       tasks: [...tasks.slice(0, index), ...tasks.slice(index + 1)],
  //       archive: [...archive, task]
  //     });
  //   case 'ADD_COLOR':
  //     const [newColor] = args;
  //     return {
  //       ...state,
  //       colors: [...state.colors, newColor]
  //     };
  //   default:
  //     return state;
  // }
}
