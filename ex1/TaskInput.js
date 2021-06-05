import html from '../lib/core.js';
import { connect } from '../store.js';

function TaskInput(value) {
  const onclick = `
    dispatch('ADD_TASK',document.querySelector('input').value)
  `;
  return html`
    <input type="text" value="${value}" />
    <button onclick="${onclick}">Add</button>
  `;
}

export default TaskInput;
