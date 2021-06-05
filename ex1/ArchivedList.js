import html from '../lib/core.js';
import { connect } from '../store.js';
import ArchivedTask from './ArchivedTask.js';

function ArchivedList(props) {
  const { archive } = props;
  return html`
    <h2>Completed Tasks</h2>
    <ul>
      ${archive.map(ArchivedTask)}
    </ul>
  `;
}

export default connect(state => ({
  archive: state.archive
}))(ArchivedList);
