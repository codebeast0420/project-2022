import React from 'react';

const Item = () => {
	return (
		<section id="items" className="portfolio">
			<div className="container">

				<div className="section-title">
					<h2>Items</h2>
					<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
				</div>

				<ul id="portfolio-flters" className="d-flex justify-content-center">
					<li className="filter-active">All</li>
					<li><a href='#agriculture'>Agriculture</a></li>
					<li>Livestock</li>
					<li>Fishing</li>
				</ul>

				<div className="row portfolio-container">
					<div id='agriculture' className="col-lg-4 col-md-6 portfolio-item filter-app">
						<div className="portfolio-img"><img src="images/img/portfolio/agriculture_1.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Agriculture-1</h4>
							<p>Agriculture</p>
							<a href="images/img/portfolio/agriculture_1.jpg" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-web">
						<div className="portfolio-img"><img src="images/img/portfolio/agriculture_2.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Agriculture-2</h4>
							<p>Agriculture</p>
							<a href="images/img/portfolio/agriculture_2.jpg" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-app">
						<div className="portfolio-img"><img src="images/img/portfolio/agriculture_3.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Agriculture-3</h4>
							<p>Agriculture</p>
							<a href="images/img/portfolio/agriculture_3.jpg" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

					<div id='livestock' className="col-lg-4 col-md-6 portfolio-item filter-card">
						<div className="portfolio-img"><img src="images/img/portfolio/livestock_1.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Livestock-1</h4>
							<p>Livestock</p>
							<a href="images/img/portfolio/livestock_1.jpg" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-web">
						<div className="portfolio-img"><img src="images/img/portfolio/livestock_2.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Livestock-2</h4>
							<p>Livestock</p>
							<a href="images/img/portfolio/livestock_2.jpg" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-app">
						<div className="portfolio-img"><img src="images/img/portfolio/livestock_3.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Livestock-3</h4>
							<p>Livestock</p>
							<a href="images/img/portfolio/livestock_3.jpg" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

					<div id='fishing' className="col-lg-4 col-md-6 portfolio-item filter-card">
						<div className="portfolio-img"><img src="images/img/portfolio/fishing_1.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Fishing-1</h4>
							<p>Fishing</p>
							<a href="images/img/portfolio/fishing_1.jpg" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-card">
						<div className="portfolio-img"><img src="images/img/portfolio/fishing_2.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Fishing-2</h4>
							<p>Fishing</p>
							<a href="images/img/portfolio/fishing_2.jpg" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-web">
						<div className="portfolio-img"><img src="images/img/portfolio/fishing_3.jpg" className="img-fluid" alt="" /></div>
						<div className="portfolio-info">
							<h4>Fishing-3</h4>
							<p>Fishing</p>
							<a href="images/img/portfolio/fishing_3.jpg" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
							<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
						</div>
					</div>

				</div>

			</div>
		</section>
	)
};

export default Item;