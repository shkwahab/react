import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideBar from './../Element/SideBar';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var img = require('./../../images/banner/bnr1.jpg');

class Blogsinglesidebar extends Component{
	render(){
		return(
			<>
			
			<Header />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Blog single with sidebar</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Blog single with sidebar</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full bg-white content-inner-2">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 m-b30">
								<div className="blog-post blog-single sidebar">
									<div className="dlab-post-media dlab-img-effect zoom-slow radius-sm"> 
										<Link to={'/blog-single-sidebar'}><img src={require('./../../images/blog/default/thum1.jpg')} alt="" /></Link> 
									</div>
									<div className="dlab-post-info">
										<div className="dlab-post-title">
											<h2 className="post-title">Restaurant Has The Answer</h2>
										</div>
										<div className="dlab-post-meta">
											<div className="post-author-thumb">
												<img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
											</div>
											<ul>
												<li className="post-author"><Link >Admin</Link> </li>
												<li className="post-date">10 Aug 2019</li>
											</ul>
										</div>
										<div className="dlab-post-text">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</blockquote>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
											<div className="wp-block-image alignleft">
												<img src={require("./../../images/about/pic2.jpg")} alt=""/>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
										</div>
										<div className="dlab-post-tags clear">
											<div className="post-tags"> 
												<Link to={''}>Child </Link> <Link to={''}>Eduction </Link> <Link to={''}>Money </Link> <Link to={''}>Resturent </Link> 
											</div>
										</div>
									</div>
								</div>
								<div className="clear" id="comment-list">
									<div className="comments-area" id="comments">
										<h2 className="comments-title">8 Comments</h2>
										<div className="clearfix">
											
											<ol className="comment-list">
												<li className="comment">
													<div className="comment-body">
														<div className="comment-author vcard"> 
															<img  className="avatar photo" src={require('./../../images/testimonials/pic1.jpg')} alt="" /> 
															<cite className="fn">Oliver</cite> <span className="says">says:</span> 
															<div className="comment-meta"> <Link to={''}>October 6, 2015 at 7:15 am</Link> </div>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
															Nam vitae neque vitae sapien malesuada aliquet. </p>
														<div className="reply"> <Link to={''} className="comment-reply-link">Reply</Link> </div>
													</div>
													<ol className="children">
														<li className="comment odd parent">
															<div className="comment-body">
																<div className="comment-author vcard"> 
																	<img  className="avatar photo" src={require('./../../images/testimonials/pic2.jpg')} alt="" /> 
																	<cite className="fn">Harry</cite> <span className="says">says:</span> 
																	<div className="comment-meta"> <Link to={''}>October 6, 2015 at 7:15 am</Link> </div>
																</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																	In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																	ac elementum ligula blandit ac.</p>
																<div className="reply"> <Link to={''} className="comment-reply-link">Reply</Link> </div>
															</div>
															
														</li>
													</ol>
													
												</li>
												<li className="comment">
													<div className="comment-body">
														<div className="comment-author vcard"> 
															<img  className="avatar photo" src={require('./../../images/testimonials/pic1.jpg')} alt="" /> 
															<cite className="fn">Stacy poe</cite> <span className="says">says:</span> 
															<div className="comment-meta"> <Link to={''}>October 6, 2015 at 7:15 am</Link> </div>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
															In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
															ac elementum ligula blandit ac.</p>
														<div className="reply"> <Link to={''} className="comment-reply-link">Reply</Link> </div>
													</div>
												</li>
											</ol>
											
											<div className="comment-respond" id="respond">
												<h4 className="comment-reply-title" id="reply-title">Leave a Reply 
													<small><Link style={{display:"none"}} to={''} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> 
												</h4>
												<p>Your email address will not be published. Required fields are marked *</p>
												<form className="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
													<p className="comment-form-comment">
														<label for="comment">Comment</label>
														<textarea rows="8" placeholder="Comment" id="comment"></textarea>
													</p>
													<p className="comment-form-author">
														<label for="author">Name <span className="required">*</span></label>
														<input type="text" value="" placeholder="Author" id="author" />
													</p>
													<p className="comment-form-email">
														<label for="email">Email <span className="required">*</span></label>
														<input type="text" value="" placeholder="Email" id="email" />
													</p>
													<p className="comment-form-url">
														<label for="url">Website</label>
														<input type="text"  value=""  placeholder="Website"  id="url" />
													</p>
													<p className="form-submit">
														<input type="submit" value="Post Comment" className="btn btnhover" id="submit" />
													</p>
												</form>
											</div>
											
										</div>
									</div>
								</div>
							</div>
								
							<SideBar  />
						</div>		
								
					</div>
				</div>
				
			</div>
			
			<Footer />
			
			</>
		)
	}
}

export default Blogsinglesidebar;