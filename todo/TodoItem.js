import html from '../lib/core.js';
import { connect } from '../store.js';
function TodoItem(props) {
  const { todo, index, editedTodo } = props;
  const ENTER_KEY = 13;
  const ESC_KEY = 27;
  return html`
    <li
      class="${todo.completed && 'completed'} ${todo === editedTodo &&
        'editing'}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && 'checked'}
          onchange="dispatch('toggle', ${index})"
        />
        <label ondblclick="dispatch('editStart', ${index})">
          ${todo.title}
        </label>
        <button class="destroy" onclick="dispatch('remove', ${index})"></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode == ${ENTER_KEY} && dispatch('editEnd', this.value) ||event.keyCode == ${ESC_KEY} && dispatch('editCancel')"
        onblur="dispatch('editEnd', this.value)"
      />
    </li>
  `;
}

export default connect()(TodoItem);
