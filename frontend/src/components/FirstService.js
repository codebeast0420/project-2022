import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const scrollToSection = () => {
	let header = document.getElementById("header");
	let offset = header.offsetHeight;
	let elementPos = document.getElementById("services").offsetTop;
	window.scrollTo({
		top: elementPos - offset,
		behavior: "smooth"
	})
};

const FirstService = () => {

	return (
		<div>
			<Navigation />
			<section id="hero" className="d-flex align-items-center">

				<div className="container">
					<div className="row">
						<div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
							<h1>Best Analysis For You And Your Life</h1>
							<h2>We are team of talented analyst for environment and food</h2>
							<div className="d-flex justify-content-center justify-content-lg-start">
							</div>
						</div>
						<div className="col-lg-6 order-1 order-lg-2 hero-img">
							<img src="images/img/hero-img.png" className="img-fluid animated" alt="" />
						</div>
					</div>
				</div>

			</section>

			<main id="main">
				
			</main>
			<footer id="footer">
				<div className="container footer-bottom clearfix">
					<div className="copyright">
						&copy; Copyright <strong><span>Iryna</span></strong>. All Rights Reserved
					</div>
					<div className="credits">
						Designed by <a href="https://bootstrapmade.com/">Iryna</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default FirstService;