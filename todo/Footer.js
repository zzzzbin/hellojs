import html from '../lib/core.js';
import { connect } from '../store.js';
function Footer(props) {
  const { todos, filters } = props;
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todos.filter(filters.active).length}</strong>
        item${todos.filter(filters.active).length > 1 && 's'} left</span
      >
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  `;
}

export default connect()(Footer);
