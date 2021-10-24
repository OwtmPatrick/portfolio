import React from 'react';
import {init} from 'emailjs-com';
import 'animate.css/animate.css';
import './style.css';
import './animate.css';
import Main from './pages/main';

function App() {
	init(process.env.REACT_APP_EMAIL_USER_ID);

	return <Main />;
}

export default App;
