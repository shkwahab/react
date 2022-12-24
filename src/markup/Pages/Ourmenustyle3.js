import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var img = require('./../../images/banner/bnr1.jpg');
 
class Ourmenustyle3 extends Component{

	render(){
		return(
			<>
			<Header /> 
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle no-line" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Our Menu 3</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>Our Menu 3</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full bg-white">
					<div className="row sp0">
						<div className="col-lg-6">
							<img src={require('./../../images/menu/pic1.jpg')} alt="" className="img-cover" />
						</div>
						<div className="col-lg-6">
							<div className="menu-box">
								<div className="section-head style-2">
									<h4 className="sub-title">Pizza Menu</h4>
									<h2 className="title">RestroKing Pizza, The Best In Town</h2>
								</div>
								<ul className="menu-list-2">
									<li>
										<div className="info-price">
											<h5 className="title">Pepperoni Pizza</h5>
											<div className="line"></div>
											<span className="price">14.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Apricot Chicken</h5>
											<div className="line"></div>
											<span className="price">07.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Pizza Veronese</h5>
											<div className="line"></div>
											<span className="price">14.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Summer Pizza</h5>
											<div className="line"></div>
											<span className="price">23.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Italian Tuna</h5>
											<div className="line"></div>
											<span className="price">79.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Liguria Pizza</h5>
											<div className="line"></div>
											<span className="price">22.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row manu-box-reverse sp0">
						<div className="col-lg-6">
							<div className="menu-box">
								<div className="section-head style-2">
									<h4 className="sub-title">Pizza Menu</h4>
									<h2 className="title">Festive Season Offers</h2>
								</div>
								<ul className="menu-list-2">
									<li>
										<div className="info-price">
											<h5 className="title">Pepperoni Pizza</h5>
											<div className="line"></div>
											<span className="price">14.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Apricot Chicken</h5>
											<div className="line"></div>
											<span className="price">07.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Pizza Veronese</h5>
											<div className="line"></div>
											<span className="price">14.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Summer Pizza</h5>
											<div className="line"></div>
											<span className="price">23.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Italian Tuna</h5>
											<div className="line"></div>
											<span className="price">79.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Liguria Pizza</h5>
											<div className="line"></div>
											<span className="price">22.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<img src={require('./../../images/menu/pic2.jpg')} alt="" className="img-cover" />
						</div>
					</div>
				</div>
			</div>
			
			<Footer  />
			
			</>
		)
	}
}

export default 	Ourmenustyle3;