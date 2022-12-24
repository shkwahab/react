import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import OurPartners from './../Element/OurPartners';

var img1 = require('./../../images/banner/bnr1.jpg');
var img2 = require('./../../images/background/bg1.jpg');

const teamInfo = [
	{
		image: require('./../../images/our-team/member1.jpg'), 	
		name :	'Nashid Martines',
		post : 	'Founder',
	},
	{
		image: require('./../../images/our-team/member2.jpg'), 	
		name :	'Konne Backfiled',
		post : 	'Sous Chef',
	},
	{
		image: require('./../../images/our-team/member3.jpg'), 	
		name :	'Valentino Morose',
		post : 	'Ceo & Founder',
	},
	{
		image: require('./../../images/our-team/member4.jpg'), 	
		name :	'Hackson Willingham',
		post : 	'Master Chef',
	},
	{
		image: require('./../../images/our-team/member4.jpg'), 	
		name :	'Nashid Martines',
		post : 	'Founder',
	},
	{
		image: require('./../../images/our-team/member1.jpg'), 	
		name :	'Konne Backfiled',
		post : 	'Sous Chef',
	},
	{
		image: require('./../../images/our-team/member2.jpg'), 	
		name :	'Valentino Morose',
		post : 	'Ceo & Founder',
	},
	{
		image: require('./../../images/our-team/member3.jpg'), 	
		name :	'Hackson Willingham',
		post : 	'Master Chef',
	},
	
]

class Team extends Component{
	
	render(){
		return(
			<>
			<Header />
		
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Our Team</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'/'}><i className="fa fa-home"></i></Link></li>
									<li>Our Team</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="content-block">
					
					<div className="section-full content-inner-1 bg-white"  style={{backgroundImage:"url(" + img2 + ")" }}>
						<div className="container">
							<div className="row">
								{teamInfo.map((item,index) =>(
								
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="dlab-team1" key={index}>
										<div className="thumb" >
											<img src={item.image} alt="" />
											<ul className="social-link">
												<li><Link to={''}><i className="fa fa-facebook"></i></Link></li>
												<li><Link to={''}><i className="fa fa-twitter"></i></Link></li>
											</ul>
										</div>
										<div className="team-info text-center">
											<h4 className="name">{item.name}</h4>
											<p className="position">{item.post}</p>
										</div>
									</div>
								</div>
								))}
								
							</div>
						</div>
						<div className="p-tb50">
							<OurPartners />
						</div>
					</div>
					
				</div>
				
			</div>	
			
			<Footer />
			</>
		)
	
	}
}

export default Team;