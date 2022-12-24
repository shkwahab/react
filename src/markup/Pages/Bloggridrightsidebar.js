import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Bloggrid from './../Pages/Bloggrid';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from 'simple-react-lightbox';

var img = require('./../../images/banner/bnr1.jpg');

class Bloggridrightsidebar extends  Component{
	render(){
		return(
			<>
			<Header />
			
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Blog grid 2 with sidebar</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'/'}>Home</Link></li>
									<li>Blog grid 2 with sidebar</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				<div className="content-inner section-full">
					<div className="container">
						<div className="row">		
							<div className="col-lg-8 ">
								<Bloggrid />
							</div>
							<div className="col-lg-4  sticky-top">
								<aside  className="side-bar">
									<div className="widget">
										<div className="search-bx style-2">
											<form role="search" method="post">
												<div className="input-group">
													<input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
													<span className="input-group-btn">
														<button type="submit" className="btn btnhover primary">Search</button>
													</span> 
												</div>
											</form>
										</div>
									</div>
									<div className="widget recent-posts-entry">
										<h5 className="widget-title style-1">Recent Posts</h5>
										<div className="widget-post-bx">
											<div className="widget-post clearfix">
												<div className="dlab-post-media"> 
													<img src={require('./../../images/blog/recent-blog/pic1.jpg')} width="200" height="143" alt="" /> 
												</div>
												<div className="dlab-post-info">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date">25 March 2020</li>
														</ul>
													</div>
													<div className="dlab-post-header">
														<h6 className="post-title"><Link to={'blog-single-left-sidebar'}>This Is Why Restaurant Is So Famous</Link></h6>
													</div>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="dlab-post-media"> 
													<img src={require('./../../images/blog/recent-blog/pic2.jpg')} width="200" height="160" alt="" /> 
												</div>
												<div className="dlab-post-info">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date">25 March 2020</li>
														</ul>
													</div>
													<div className="dlab-post-header">
														<h6 className="post-title"><Link to={'blog-single-left-sidebar'}>Learning Restaurant Is Not Difficult At All</Link></h6>
													</div>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="dlab-post-media"> 
													<img src={require('./../../images/blog/recent-blog/pic3.jpg')} width="200" height="160" alt="" /> 
												</div>
												<div className="dlab-post-info">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date">25 March 2020</li>
														</ul>
													</div>
													<div className="dlab-post-header">
														<h6 className="post-title"><Link to={'blog-single-left-sidebar'}>Simple Guidance For You In Restaurant</Link></h6>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="widget widget_gallery gallery-grid-4">
										<h5 className="widget-title style-1">Our Gallery</h5>
										<SimpleReactLightbox>
											<SRLWrapper >
												<ul id="lightgallery" className="lightgallery">
													<li>
														<div className="dlab-post-thum dlab-img-effect">
															<a href={require('./../../images/gallery/pic1.jpg')} className="check-km" >		
																<img src={require('./../../images/gallery/pic1.jpg')} alt="" /> 
															</a>
														</div>
													</li>
													<li>
														<div className="dlab-post-thum dlab-img-effect">
															<a href={require('./../../images/gallery/pic2.jpg')} className="check-km" >		
																<img src={require('./../../images/gallery/pic2.jpg')} alt="" /> 
															</a>
														</div>
													</li>
													<li>
														<div className="dlab-post-thum dlab-img-effect">
															<a href={require('./../../images/gallery/pic3.jpg')} className="check-km" >		
																<img src={require('./../../images/gallery/pic3.jpg')} alt="" /> 
															</a>
														</div>
													</li>
													<li>
														<div className="dlab-post-thum dlab-img-effect">
															<a href={require('./../../images/gallery/pic4.jpg')} className="check-km" >		
																<img src={require('./../../images/gallery/pic4.jpg')} alt="" /> 
															</a>
														</div>
													</li>
													<li>
														<div className="dlab-post-thum dlab-img-effect">
															<a href={require('./../../images/gallery/pic5.jpg')} className="check-km" >		
																<img src={require('./../../images/gallery/pic5.jpg')} alt="" /> 
															</a>
														</div>
													</li>
													<li>
														<div className="dlab-post-thum dlab-img-effect">
															<a href={require('./../../images/gallery/pic6.jpg')} className="check-km" >		
																<img src={require('./../../images/gallery/pic6.jpg')} alt="" /> 
															</a>
														</div>
													</li>
													<li>
														<div className="dlab-post-thum dlab-img-effect">
															<a href={require('./../../images/gallery/pic7.jpg')} className="check-km" >		
																<img src={require('./../../images/gallery/pic7.jpg')} alt="" /> 
															</a>
														</div>
													</li>
													<li>
														<div className="dlab-post-thum dlab-img-effect">
															<a href={require('./../../images/gallery/pic8.jpg')} className="check-km" >		
																<img src={require('./../../images/gallery/pic8.jpg')} alt="" /> 
															</a>
														</div>
													</li>
												</ul>
											</SRLWrapper>
										</SimpleReactLightbox>
									</div>
									<div className="widget widget_archive">
										<h5 className="widget-title style-1">Categories List</h5>
										<ul>
											<li><Link to={''}>Dinner Recipes</Link></li>
											<li><Link to={''}>Vegan Recipes</Link></li>
											<li><Link to={''}>Healthy Food</Link></li>
											<li><Link to={''}>Italian Food</Link></li>
											<li><Link to={''}>Indian Food</Link></li>
										</ul>
									</div>
									<div className="widget widget_tag_cloud radius">
										<h5 className="widget-title style-1">Tags</h5>
										<div className="tagcloud"> 
											<Link to={''}>Bakery</Link> 
											<Link to={''}>Cake</Link> 
											<Link to={''}>Food</Link> 
											<Link to={''}>Dinner</Link> 
											<Link to={''}>Burger</Link> 
											<Link to={''}>Restaurant</Link> 
											<Link to={''}>Healthy</Link> 
											<Link to={''}>Coffe</Link>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</div>	
				</div>	
			</div>	
			
			<Footer  />
			</>
			
		)
	}
}

export default Bloggridrightsidebar;