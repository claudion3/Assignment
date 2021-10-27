import React, { Component } from 'react';
import style from './Navbar.module.scss';

/**
 * @memberOf Navbar
 */
export type NavbarProps = React.HTMLProps<HTMLDivElement>;

/**
 * Default navigation bar.
 * @component
 * @alias Navbar
 * @category Design System
 * @hideConstructor
 * @example
 * return (<Navbar />)
 */

export class Navbar extends Component {
	render() {
		return (
			<nav className={style.navbar} data-testid='navbar'>
				<div className={style.navbar_logo}>
					<h2>Person Data </h2>
				</div>
				<div className={style.hamburger_menu}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
