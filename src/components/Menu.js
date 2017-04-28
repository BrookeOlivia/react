import { Component } from 'react';
import { Link } from 'react-router';
const { render } = ReactDOM;
export class Menu extends React.Component {

render() {
  	return (
		<nav className="menu">
			<ul>
				<li><Link to="/" href="/" activeClassName="selected">Phone Book</Link></li>
				<li><Link to="/detail" href="/#/detail" activeClassName="selected">Detail</Link></li>
				<li><Link to="/detail" href="/#/detail/craig" activeClassName="selected">Detail</Link></li>
			</ul>
		</nav>
	);
  }
}
