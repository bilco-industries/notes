import React from 'react';
import './Login.css';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const login = () => {
	const login = () => {
		const password = document.getElementById('password').value;
		const username = document.getElementById('username').value;
	};

	return (
		<div className='login page bg-primary'>
			<Header />
			<form className='form bg-secondary'>
				<input
					className='field bg-primary bd-secondary'
					type='text'
					id='username'
					placeholder='Username'
				/>
				<input
					className='field bg-primary bd-secondary'
					type='password'
					id='password'
					placeholder='Password'
				/>
				<input
					className='field bg-primary bd-secondary primary'
					value='login'
					type='button'
					onClick={() => login()}
				/>
			</form>
			<div className='links'>
				<ul className='horizontal-list'>
					<li>
						<a className='primary' href='/create-user'>
							Create Account
						</a>
					</li>
					<li>
						<a className='primary' href='/forgot-password'>
							Forgot password
						</a>
					</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export default login;
