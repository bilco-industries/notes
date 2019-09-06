import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './theme.css';
import Login from './pages/Login';
import * as serviceWorker from './serviceWorker';
import ThemeSwitch from './components/ThemeSwitch';

ReactDOM.render(
	<ThemeSwitch Hidden />,
	document.getElementById('hidden-switch')
);

switch (window.location.pathname) {
	case '/login':
		ReactDOM.render(<Login />, document.getElementById('root'));
		break;
	default:
		break;
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
