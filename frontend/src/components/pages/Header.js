import React from 'react';

const Header = () => {
	return (
		<header className="header bg">
			<div className="container text-white">
				<div className="row">
					<div className="col-sm-4 align-self-center text-left">
					</div>
					<div className="col-sm-4 col-12 align-self-center box-1 text-center">
						<a className="navbar-brand" href="index.html"><img src="images/header-logo.png" alt="logo" /></a>
					</div>
					<div className="col-sm-4 align-self-center text-right">
					</div>
				</div>
			</div>
		</header>
	);
}
export default Header;