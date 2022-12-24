import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Bloggrid from './../Pages/Bloggrid';
import SideBar from './../Element/SideBar';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';


var img = require('./../../images/banner/bnr1.jpg');

class Bloggridleftsidebar extends  Component{
	render(){
		return(
			<>
			<Header />
			
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Blog grid 2 with left sidebar</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'/'}>Home</Link></li>
									<li>Blog grid 2 with left sidebar</li>
								</ul>
							</div>
							
						</div>
					</div>
					
				</div>
				<div className="content-inner section-full">
					<div className="container">
						<div className="row">		
							
							<SideBar />
							<div className="col-lg-8 ">
								<Bloggrid />
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

export default Bloggridleftsidebar;