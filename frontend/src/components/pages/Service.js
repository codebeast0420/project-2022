import React from 'react'
import { Link } from 'react-router-dom';

const scrollToAgriculture = () => {
	let header = document.getElementById("header");
	let offset = header.offsetHeight;
	let elementPos = document.getElementById("agriculture").offsetTop;
	window.scrollTo({
		top: elementPos - offset - 100,
		behavior: "smooth"
	})
};

const scrollToLivestock = () => {
	let header = document.getElementById("header");
	let offset = header.offsetHeight;
	let elementPos = document.getElementById("livestock").offsetTop;
	window.scrollTo({
		top: elementPos - offset - 100,
		behavior: "smooth"
	})
};

const scrollToFishing = () => {
	let header = document.getElementById("header");
	let offset = header.offsetHeight;
	let elementPos = document.getElementById("fishing").offsetTop;
	window.scrollTo({
		top: elementPos - offset - 100,
		behavior: "smooth"
	})
};

const Service = () => {
	return (
		<section id="services" className="services section-bg">
				<div className="container">
					<div className="section-title">
							<h2>Services</h2>
							<h4>Best Analysis For You And Your Life</h4>
							<h4>We are team of talented analyst for environment and food</h4>
					</div>

					<div className="row">
						<div className="col-xl-4 col-md-6  d-flex align-items-stretch">
							<div className="icon-box">
									<h4><Link to='#' onClick={scrollToAgriculture}>Agriculture</Link></h4>
									<p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 d-flex align-items-stretch">
							<div className="icon-box">
									<div className="icon"><i className="bx bx-file"></i></div>
									<h4><Link to='#' onClick={scrollToLivestock}>Livestock</Link></h4>
									<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 d-flex align-items-stretch">
							<div className="icon-box">
								<div className="icon"><i className="bx bx-tachometer"></i></div>
								<h4><Link to='#' onClick={scrollToFishing}>Fishing</Link></h4>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
							</div>
						</div>
					</div>
				</div>
      </section>
	);
}
export default Service;