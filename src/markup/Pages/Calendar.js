import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Evenetcalender from './../Element/Evenetcalender';

var img = require('./../../images/banner/bnr1.jpg');

class Calendar extends Component{
	render(){
		return(
			<>
			
			<Header />
			
			<div className="page-content">
				
				<div className="dlab-bnr-inr overlay-black-light" style={{backgroundImage:"url(" + img + ")", backgroundPosition: "bottom right" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Booking Calendar</h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i> Home </Link></li>
									<li>Booking Calendar</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner bg-white">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
							<Evenetcalender />
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

export default Calendar;