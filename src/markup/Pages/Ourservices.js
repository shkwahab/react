import React,{Component} from 'react';

import { Link } from 'react-router-dom';

import OurPartners from './../Element/OurPartners';
import PriceTable from './../Element/PriceTable';


import Header from './../Layout/Header';
import Footer from './../Layout/Footer';


var img1 = require('./../../images/banner/bnr1.jpg');
var img2 = require('./../../images/background/bg5.jpg');
var img3 = require('./../../images/background/bg4.jpg');
var img4 = require('./../../images/background/bg1.jpg');


class Ourservices extends Component{
	render(){
		return(
			<>
			<Header /> 
			<div className="page-content bg-white">
				
				<div class="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")", backgroundSize:"cover"}}>
					<div class="container">
						<div class="dlab-bnr-inr-entry">
							<h1 class="text-white">Our Services</h1>
							
							<div class="breadcrumb-row">
								<ul class="list-inline">
									<li><Link to={"./"}><i class="fa fa-home"></i></Link></li>
									<li>Our Services</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="content-block">
					
					<div className="section-full bg-white content-inner" style={{backgroundImage:"url(" + img2 + ")", backgroundSize:"100%"}}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<div className="icon-bx icon-bx-xl">
											<img src={require('./../../images/cake1.jpg')} alt="" />
										</div>
										<h3>We’Ve Got You Covered!</h3>
										<p>What You Get With Us</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon4.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Fast Delivery</h4>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon5.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Pickup In Store</h4>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon6.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Seat Reservation</h4>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon7.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Catering Is An Option</h4>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon4.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Fast Delivery</h4>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon5.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Pickup In Store</h4>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon6.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Seat Reservation</h4>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
										<div className="icon-bx-md bg-primary radius m-b20">
											<span className="icon-cell"><img src={require('./../../images/icons/icon7.png')} alt="" /></span>
										</div>
										<div className="icon-content">
											<h4 className="dlab-tilte m-b5">Catering Is An Option</h4>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img3 + ")", backgroundSize:'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<h2 className="text-white">What Do We Offer For You?</h2>
										<p className="text-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
										<div className="dlab-separator style1 bg-primary"></div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 m-b30">
									<img src={require('./../../images/about/pic1.jpg')} className="img-cover radius-sm" alt="" />
								</div>
								<div className="col-lg-8">
									<div className="row p-l30">
										<div className="col-lg-6 col-sm-6 m-b30">
											<div className="icon-bx-wraper text-white service-box2">
												<div className="icon-bx">
													<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon2.png')} alt="" /></Link>
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte">Pancakes</h5>
													<p>Lorem Ipsum is dummy</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-sm-6 m-b30">
											<div className="icon-bx-wraper text-white service-box2">
												<div className="icon-bx">
													<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon3.png')} alt="" /></Link> 
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte">Muffin</h5>
													<p>Lorem Ipsum is dummy</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-sm-6 m-b30">
											<div className="icon-bx-wraper text-white service-box2">
												<div className="icon-bx">
													<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon4.png')} alt="" /></Link> 
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte">Pumpkin cakes</h5>
													<p>Lorem Ipsum is dummy</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-sm-6 m-b30">
											<div className="icon-bx-wraper text-white service-box2">
												<div className="icon-bx">
													<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></Link> 
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte">Pumpkin Cupcakes</h5>
													<p>Lorem Ipsum is dummy</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-sm-6 m-b30">
											<div className="icon-bx-wraper text-white service-box2">
												<div className="icon-bx">
													<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></Link> 
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte">Cake Services</h5>
													<p>Lorem Ipsum is dummy</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-sm-6 m-b30">
											<div className="icon-bx-wraper text-white service-box2">
												<div className="icon-bx"> 
													<Link to={''} className="icon-cell"><img src={require('./../../images/icons/service-icon/icon1.png')} alt="" /></Link> 
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte">Birthday Cake</h5>
													<p>Lorem Ipsum is dummy</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="section-full content-inner-1 bg-white"  style={{backgroundImage:"url(" + img4 + ")"}}>
						
						<PriceTable />
						
						<div className="content-inner">
							<div className="container">	
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<h3>Our PARTNERS</h3>
											<p>famous companies trusted us, why you are not</p>
										</div>
									</div>
								</div>
							</div>
							<OurPartners />
						</div>
						
						
					</div>
					
				</div>
				<Footer />
			</div>
			
		</>
		)
	}
	
}
export default Ourservices;