import React from 'react';
import {init} from 'emailjs-com';
import 'animate.css/animate.css';
import './style.css';
import './animate.css';

import Router from './router';

function App() {
	init(process.env.REACT_APP_EMAIL_USER_ID);

	return <Router />;
}

export default App;
