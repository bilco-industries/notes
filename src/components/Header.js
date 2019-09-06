import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import './Header.css';

const Header = () => {
	return (
		<header>
			<h1 className='title primary'>Bilco Notes</h1>
			<nav>
				<ThemeSwitch />
			</nav>
		</header>
	);
};

export default Header;
