import { createStore } from './lib/core.js';
import reducer from './reducer.js';
import withLogger from './lib/logger.js';

const { attach, connect, dispatch } = createStore(withLogger(reducer));
window.dispatch = dispatch;
export { attach, connect };
