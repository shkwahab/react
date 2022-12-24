import React, {Component} from 'react';
import  { Link } from 'react-router-dom';
import GoogleMaps from "simple-react-google-maps";
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bgimg1 = require('./../../images/banner/bnr1.jpg');
var bgimg2 = require('./../../images/background/bg5.jpg');

class Contact2 extends  Component{

	render(){
		return(
			
			<>
			<Header />	
			 
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage: "url(" + bgimg1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Contact Us 2</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>Contact Us 2</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			
				<div className="content-block">
					<div className="section-full content-inner contact-form bg-white" style={{backgroundImage:"url(" +  bgimg2 + ")", backgroundSize:"100%" }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-12 m-b30">
									<h2 className="m-tb5">Contact Us</h2>
									<div className="dlab-separator bg-black"></div>
									<p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue.</p>
									<div className="dzFormMsg"></div>
									<form method="post" className="dzForm" action="script/contact.php">
									<input type="hidden" value="Contact" name="dzToDo" />
										<div className="row">
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Your Name (required)</label>
													<div className="input-group">
														<input name="dzName" type="text" required className="form-control" placeholder=""  />
													</div>
												</div>
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Your Email (required)</label>
													<div className="input-group"> 
														<input name="dzEmail" type="email" className="form-control" required  placeholder="" />
													</div>
												</div>
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Phone No</label>
													<div className="input-group">
														<input name="dzOther[Phone]" type="text" required className="form-control" placeholder="" />
													</div>
												</div>
											</div>
											<div className="col-md-6 col-sm-6">
												<div className="form-group">
													<label>Subject</label>
													<div className="input-group">
														<input name="dzOther[Subject]" type="text" required className="form-control" placeholder="" />
													</div>
												</div>
											</div>
											<div className="col-md-12 col-sm-12">
												<div className="form-group">
													<label>Messages</label>
													<div className="input-group">
														<textarea name="dzMessage" rows="4" className="form-control" required placeholder=""></textarea>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
													<div className="form-group">
														<div className="input-group">
															<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
															<input className="form-control d-none" style={{display:"none"}} data-recaptcha="true" required data-error="Please complete the Captcha" />
														</div>
													</div>
												</div>
											<div className="col-md-12 col-sm-12">
												<button name="submit" type="submit" value="Submit" className="btn btnhover"> <span>SUBMIT</span> </button>
											</div>
										</div>
									</form>
								</div>
								
								<div className="col-lg-4 d-flex m-b30">
									<GoogleMaps
										apiKey={"AIzaSyDrAU41UTBlcEDNJgEtdlFLZeUBNBuHhzM"}
										style={{ height: "500px", width: "100%" }}
										zoom={6}
										center={{ lat: 37.4224764, lng: -122.0842499 }}
										markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
				
			<Footer />
			
			</>	
		
		)
	}

}


export default Contact2;