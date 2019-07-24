import React from 'react';
import ReactDOM from 'react-dom';



import './assets/style/css/aos.css';
import './assets/style/css/style.css';
import './assets/style/css/bootstrap-datepicker.css';
import './assets/style/css/bootstrap.min.css';

// import './assets/style/css/owl.carousel.min.css';
// import './assets/style/css/owl.theme.default.min.css';

import './assets/style/css/magnific-popup.css';
import './assets/style/css/mediaelementplayer.css';




// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
