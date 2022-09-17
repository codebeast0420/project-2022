import React from "react";

const Forgot = () => {
	return (
		<div>
			<div className="container">
				<div className="forgot-row">
					<div className="col-md-4 col-md-offset-4">

						<form action="#" className="fh5co-form animate-box" data-animate-effect="fadeIn">
							<h2>Forgot Password</h2>
							<div className="form-group">
								<div className="alert alert-success" role="alert">Your email has been sent.</div>
							</div>
							<div className="form-group">
								<label for="email" className="sr-only">Email</label>
								<input type="email" className="forgot-form-control form-control" id="email" placeholder="Email" autocomplete="off"  />
							</div>
							<div className="form-group">
								<p><a href="index.html">Sign In</a> or <a href="sign-up.html">Sign Up</a></p>
							</div>
							<div className="form-group">
								<input type="submit" value="Send Email" className="btn btn-primary" />
							</div>
						</form>


					</div>
				</div>
				<div className="row" style={{paddingTop: "60px", clear: "both"}}>
					<div className="col-md-12 text-center">
						<p><small>&copy; All Rights Reserved. Designed by <a href="#">Iryna
							</a></small></p>
					</div>
				</div>
			</div>


		</div>
	)
}

export default Forgot;