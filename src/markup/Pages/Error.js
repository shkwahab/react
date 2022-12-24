import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var img1 = require('./../../images/banner/bnr1.jpg');
var img2 = require('./../../images/background/bg5.jpg');

class Error extends Component{
	render(){
		return(
			<>
			
			<Header />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage:"url(" + img1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Error 404</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>Error 404</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="content-block">
					<div className="section-full content-inner-2 contact-form bg-white" style={{ backgroundImage:"url(" + img2 + ")" , backgroundSize:"100%" }} >
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="page-notfound text-center">
										<form method="post">
											<strong>404</strong>
											<h5 className="sub-title">Page  <i className="fa fa-exclamation-triangle text-primary"></i> not found</h5>
											<Link to={'./'} className="btn btnhover">Go To Home</Link>
										</form>
									</div>
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

export default Error;