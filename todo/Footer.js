import html from '../lib/core.js';
import { connect } from '../store.js';
function Footer(props) {
  const { todos, filter, filters } = props;
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todos.filter(filters.active).length}</strong>
        item${todos.filter(filters.active).length > 1 && 's'} left</span
      >
      <ul class="filters">
        ${Object.keys(filters).map(
          key => html`
            <li>
              <a
                class="${filter === key && 'selected'}"
                href="#"
                onclick="dispatch('switchFilter','${key}')"
                >${key[0].toUpperCase() + key.substring(1)}</a
              >
            </li>
          `
        )}
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  `;
}

export default connect()(Footer);
