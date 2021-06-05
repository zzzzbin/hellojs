const init = {
  cars: ['BMW'],
  colors: ['red', 'green', 'blue']
};
export default function reducer(state = init, action, args) {
  console.log(action, args);
  switch (action) {
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
