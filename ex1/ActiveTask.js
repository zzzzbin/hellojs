import html from '../lib/core.js';
function ActiveTask(text, index) {
  return html`
    <li>
      ${text} ${index}
      <button onclick="dispatch('COMPLETE_TASK',${index})">Mark As Done</button>
    </li>
  `;
}

export default ActiveTask;
