import html from '../lib/core.js';
import ActiveList from './ActiveList.js';
import ArchivedList from './ArchivedList.js';
export default function App() {
  return html`
    ${ActiveList()} ${ArchivedList()}
  `;
}
