import { attach } from './store.js';
import App from './ex1/App.js';
attach(App, document.querySelector('#root'));

// attach(() => '<h1>Hello world</h1>', document.getElementById('root'));

// import html from './lib/core.js';
// const cars = ['Toyota', 'Huyndai', 'Vinfast'];
// const isSuccess = false;
// const output = html`
//   <h1>${isSuccess && 'Thanh cong'}${0}</h1>
//   <ul>
//     ${cars.map(car => `<li>${car}</li>`).join('')}
//   </ul>
// `;
// console.log(output);
