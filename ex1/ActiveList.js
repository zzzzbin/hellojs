import html from '../lib/core.js';
import { connect } from '../store.js';
import ActiveTask from './ActiveTask.js';
import TaskInput from './TaskInput.js';

function ActiveList(props) {
  const { tasks } = props;
  return html`
    <h2>My Active Tasks</h2>
    <ul>
      ${tasks.map(ActiveTask)}
      <li>
        ${TaskInput()}
      </li>
    </ul>
  `;
}

export default connect(state => ({ tasks: state.tasks }))(ActiveList);
