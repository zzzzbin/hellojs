const init = {
  cars: ['BMW'],
  colors: ['red', 'green', 'blue'],
  tasks: ['reading', 'writing'],
  archive: []
};
function merge(...objs) {
  return Object.assign({}, ...objs);
}
export default function reducer(state = init, action, args) {
  switch (action) {
    case 'ADD_TASK':
      const [value] = args;
      return merge(state, {
        tasks: [...state.tasks, value]
      });
    case 'COMPLETE_TASK':
      const { tasks, archive } = state;
      const [index] = args;
      const task = tasks[index];
      return Object.assign({}, state, {
        tasks: [...tasks.slice(0, index), ...tasks.slice(index + 1)],
        archive: [...archive, task]
      });
    case 'ADD_COLOR':
      const [newColor] = args;
      return {
        ...state,
        colors: [...state.colors, newColor]
      };
    default:
      return state;
  }
}
