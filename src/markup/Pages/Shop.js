import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bnr= require('./../../images/banner/bnr1.jpg');

class Shop extends Component{
	render(){
		return(
			<>
			<Header />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Shop</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>Shop</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="content-block">
					
					<div className="section-full content-inner bg-gray-light">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box shop-item">
										<div className="item-img">
											<img src={require('./../../images/product/item8.jpg')} alt="" />
											<div className="price">
												$35.00 
											</div>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<Link to={'/shop-product-details'} className="btn btnhover"><i className="ti-shopping-cart m-r5"></i> Add To Cart</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box shop-item">
										<div className="item-img">
											<img src={require('./../../images/product/item7.jpg')} alt="" />
											<span className="sale">Sale!</span>
											<div className="price">
												<del>$25.00</del> $35.00 
											</div>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
											<Link to={'/shop-product-details'} className="btn btnhover"><i className="ti-shopping-cart m-r5"></i> Add To Cart</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box shop-item">
										<div className="item-img">
											<img src={require('./../../images/product/item6.jpg')} alt="" />
											<div className="price">
												$20.00 
											</div>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<Link to={'/shop-product-details'} className="btn btnhover"><i className="ti-shopping-cart m-r5"></i> Add To Cart</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box shop-item">
										<div className="item-img">
											<img src={require('./../../images/product/item5.jpg')} alt="" />
											<div className="price">
												$18.00 
											</div>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Cupcakes</Link></h4>
											<Link to={'/shop-product-details'} className="btn btnhover"><i className="ti-shopping-cart m-r5"></i> Add To Cart</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box shop-item">
										<div className="item-img">
											<img src={require('./../../images/product/item4.jpg')} alt="" />
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Birthday Cake</Link></h4>
											<Link to={'/shop-product-details'} className="btn btnhover"><i className="ti-shopping-cart m-r5"></i> Add To Cart</Link>	
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box shop-item">
										<div className="item-img">
											<img src={require('./../../images/product/item3.jpg')} alt="" />
											<div className="price">
												$35.00 
											</div>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Biscuits</Link></h4>
											<Link to={'/shop-product-details'} className="btn btnhover"><i className="ti-shopping-cart m-r5"></i> Add To Cart</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box shop-item">
										<div className="item-img">
											<img src={require('./../../images/product/item2.jpg')} alt="" />
											<div className="price">
												$35.00 
											</div>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<Link to={'/shop-product-details'} className="btn btnhover"><i className="ti-shopping-cart m-r5"></i> Add To Cart</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box shop-item">
										<div className="item-img">
											<img src={require('./../../images/product/item1.jpg')} alt="" />
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<Link to={'/shop-product-details'} className="btn btnhover"><i className="ti-shopping-cart m-r5"></i> Add To Cart</Link>
										</div>
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

export default Shop;