import React from 'react'
const Footer = () => {
	return (
		<footer className="page-footer font-small stylish-color-dark" >

			<div className="container text-center text-md-left">

				<div className="row">

					<div className="col-lg-5 col-sm-12 mx-auto-footer box-1">

						<a href="index.html"><img src="images/footer-logo.png" alt="footer-logo" /></a>
						<h3>All service for Any custom</h3>

					</div>

					<hr className="clearfix w-100 d-md-none" />

					<div className="col-lg-2 col-sm-4 box-2 mx-auto-foote">

						<h5>Natural Service</h5>

						<ul className="list-unstyled">
							<li>
								<a href="index.html">Agriculture</a>
							</li>
							<li>
								<a href="services.html">Livestock</a>
							</li>
							<li>
								<a href="portfolio.html">Fishing</a>
							</li>
						</ul>

					</div>

					<hr className="clearfix w-100 d-md-none" />

					<div className="col-lg-2 col-sm-4 box-3 mx-auto-foote">

						<h5>Marketing Service</h5>

						<ul className="list-unstyled">
							<li>
								<a href="#!">Foods</a>
							</li>
							<li>
								<a href="#!">Factories</a>
							</li>
							<li>
								<a href="#!">Industrial Kichens</a>
							</li>
							<li>
								<a href="#!">Others</a>
							</li>
						</ul>

					</div>

					<hr className="clearfix w-100 d-md-none" />

					<div className="col-lg-2 col-sm-4 box-4 mx-auto-foote">

						<h5>Final Consumer</h5>

						<ul className="list-unstyled">
							<li>
								<a href="#!">Terms Conditions </a>
							</li>
						</ul>

					</div>

				</div>

			</div>

			<div className="footer-copyright text-center">
				<div className="gradient"></div>
				<p>© 2022, All Rights reserved.<a href="https://www.template.net/editable/websites/html5"> tEMPLATE.net</a></p>
			</div>

		</footer>
	);
}
export default Footer;