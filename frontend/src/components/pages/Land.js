import React from 'react';
import '../../assets/css/main.css';
import './Header';
import Navigation from './Navigation';
import Welcome from './Welcome';
import Footer from './Footer';
import About from './About';
import Service from './Service';
import Team from './Team';
import Item from './Item';

const Land = ({ onRouteChange }) => {
	return (
		<div>
			<Navigation />
			<Welcome />
			<About />
			<Service />
			<Item />
			<Team />
			<Footer />
		</div>
	);
}

export default Land;