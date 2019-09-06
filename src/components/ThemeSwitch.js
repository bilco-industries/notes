import React from 'react';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
	const darkTheme = localStorage.getItem('theme') === 'dark' ? true : false;

	if (darkTheme) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}

	const switchTheme = e => {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	};
	return (
		<div className='theme-switch-wrapper primary'>
			<label className='theme-switch' htmlFor='checkbox'>
				<input
					type='checkbox'
					id='checkbox'
					onChange={e => switchTheme(e)}
					defaultChecked={darkTheme}
				/>
				<div className='slider round'></div>
			</label>
			<span>Toggle dark mode</span>
		</div>
	);
};

export default ThemeSwitch;
