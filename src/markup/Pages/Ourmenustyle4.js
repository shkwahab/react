import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var img = require('./../../images/banner/bnr1.jpg');
 
class Ourmenustyle4 extends Component{
	render(){
		
		return(
			<>
			<Header /> 
			
			 <div className="page-content bg-white">
			
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Our Menu 4</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>Our Menu 4</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner bg-white">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv1.jpg')} alt="" /></Link>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="adv-box">
											<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv2.jpg')} alt="" /></Link>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="adv-box">
											<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv3.jpg')} alt="" /></Link>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="adv-box">
											<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv4.jpg')} alt="" /></Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv5.jpg')} alt="" /></Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv6.jpg')} alt="" /></Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv7.jpg')} alt="" /></Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv8.jpg')} alt="" /></Link>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="adv-box">
											<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv2.jpg')} alt="" /></Link>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="adv-box">
											<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv3.jpg')} alt="" /></Link>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="adv-box">
											<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv4.jpg')} alt="" /></Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="adv-box">
									<Link to={'/shop-sidebar'}><img src={require('./../../images/ads/adv1.jpg')} alt="" /></Link>
								</div>
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

export default Ourmenustyle4;
