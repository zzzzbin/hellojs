import html from '../lib/core.js';
import TodoItem from './TodoItem.js';
import { connect } from '../store.js';
function TodoList(props) {
  console.log('TEST', props);
  const { todos, filters } = props;
  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('toggleAll',this.checked)"
        ${todos.every(filters.completed) && 'checked'}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.map((todo, index) => TodoItem({ todo: todo, index }))}
      </ul>
    </section>
  `;
}

export default connect()(TodoList);
