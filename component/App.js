import html from '../lib/core.js';
import { connect } from '../store.js';

const mapStateToProps = connect(state => ({
  colors: state.colors
}));

function App(props) {
  console.log('props', props); //colors: (3) ["red", "green", "blue"]
  const { colors } = props;
  return html`
    <ul>
      ${colors.map(color => `<li>${color}</li>`)}
    </ul>
    <button onclick="dispatch('ADD_COLOR','yellow')">Add color</button>
  `;
}

export default mapStateToProps(App);
