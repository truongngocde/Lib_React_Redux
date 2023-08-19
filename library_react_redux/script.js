// import html from "./core.js";

// const cars = ['BMW', 'Porsche', 'Mercedes'];

// //Tagged template literals
// const isSuccess = false;
// const output = html`
//     <h1>${isSuccess && 'Thanh cong'}</h1>
//     <ul>
//         ${cars.map(car => `<li>${car}</li>`).join('')}
//     </ul>
// `;

// console.log(output)



import { attach } from "./store.js";
import App from "./component/App.js";

attach(App, document.getElementById('root'))