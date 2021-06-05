import html from '../lib/core.js';

function ArchivedTask(text) {
  return html`
    <li style="color:#666; text-decoration:line-through">
      ${text}
    </li>
  `;
}

export default ArchivedTask;
