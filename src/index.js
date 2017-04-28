import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Switch, Route, Router, hashHistory } from 'react-router';
import './css/index.scss';
import { PhoneBook } from './components/PhoneBook';
import { Detail } from './components/Detail';
import { Menu } from './components/Menu';
import { Whoops404 } from './components/Whoops404';



const { render } = ReactDOM;

render(
	<Router history={hashHistory}>
        <Route component={PhoneBook} path="/" />
      	<Route path="/detail/:eid" component={Detail} />
      	<Route component={Whoops404} path="*" />
    </Router>,
	document.getElementById('react-container')
);

render(
	<Menu />,
	document.getElementById('nav')
);