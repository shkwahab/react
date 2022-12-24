import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var bgfoter = require('./../../images/background/bg2.jpg');	


class Footer extends Component{
	
	render(){
		return(
			<footer className="site-footer " style={{backgroundImage: "url(" + bgfoter + ")", backgroundSize: 'cover'}} >
				
				<div className="footer-top bg-line-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_getintuch">
									<h5 className="footer-title text-white">Contact Us</h5>
									<ul>
										<li>
											<i className="fa fa-map-marker"></i> 
											<p>Marmora City, Vietnam</p>
										</li>
										<li>
											<i className="fa fa-phone"></i> 
											<p>0800-123456</p>
										</li>
										<li>
											<i className="fa fa-mobile"></i> 
											<p>(+91) 0800-123456</p>
										</li>
										<li>
											<i className="fa fa-envelope"></i> 
											<p>info@example.com</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget recent-posts-entry">
									<h4 className="footer-title">Recent Post</h4>
									<div className="widget-post-bx">
										<div className="widget-post clearfix">
											<div className="dlab-post-media radius-sm"> 
												<img src= {require('./../../images/blog/recent-blog/pic1.jpg')} alt="" /> 
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'/blog-single'}>The Background Of Bakery Now</Link></h6>
												</div>
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <i className="la la-clock-o"></i><strong>March 25, 2020</strong> </li>
													</ul>
												</div>
											</div>
										</div>
										<div className="widget-post clearfix">
											<div className="dlab-post-media radius-sm"> 
												<img src= {require('./../../images/blog/recent-blog/pic1.jpg')} alt="" /> 
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'blog-single'}>How Bakery Can Increase Your Profit</Link></h6>
												</div>
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <i className="la la-clock-o"></i><strong>March 25, 2020</strong> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_services border-0">
								   <h4 className="footer-title">Quick Links</h4>
									<ul className="list-2">
										<li><Link to={'/'}>Home</Link></li>
										<li><Link to={'/about-1'}>About</Link></li>
										<li><Link to={'/our-menu-1'}>Our Menu</Link></li>
										<li><Link to={'/faq'}>FAQ</Link></li>
										<li><Link to={'/blog-grid-2'}>Blog</Link></li>
										<li><Link to={'/shop'}>Shop</Link></li>
										<li><Link to={'/contact-1'}>Contact</Link></li>
										<li><Link to={'/team'}>Team</Link></li>
										<li><Link to={'/calendar'}>Calendar</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget border-0">
								   <h4 className="footer-title">Opening Hours</h4>
								   <p className="m-b20">Our support available to help you 24 hours a day, seven days a week.</p>
									<ul className="work-hour-list">
										<li>
											<span className="day"><span>Monday to Friday</span></span> 
											<span className="timing">7AM - 5PM</span>
										</li>
										<li>
											<span className="day"><span>Saturday</span></span>
											<span className="timing">10AM - 5PM</span>
										</li>
										<li>
											<span className="day"><span>Sunday</span></span>
											<span className="timing">Closed</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 text-left"> <span>Copyright © 2021 DexignZone. all rights reserved.</span> </div>
							<div className="col-lg-6 col-md-6 text-right"> 
								<div className="widget-link"> 
									<ul>
										<li><Link to={'about-1'}>About Us</Link></li>
										<li><Link to={'faq'}>Faq</Link></li> 
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
		)
		
	}
}

export default Footer;