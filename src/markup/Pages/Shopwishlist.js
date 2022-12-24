import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Form} from 'react-bootstrap';

var bnr = require('./../../images/banner/bnr2.jpg');

class Shopwishlist extends Component{
	render(){
		return(
			<>
			<Header />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: "url( " + bnr + " )"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Wishlist</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Wishlist</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner">
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="table-responsive">
									<table className="table check-tbl">
										<thead>
											<tr>
												<th>Product</th>
												<th>Product name</th>
												<th>Unit Price</th>
												<th>Quantity</th>
												<th>Add to cart </th>
												<th>Close</th>
											</tr>
										</thead>
										<tbody>
											<tr className="alert">
												<td className="product-item-img">
													<img src={require('./../../images/product/thumb/item1.jpg')} alt="" />
												</td>
												<td className="product-item-name">Pizza</td>
												<td className="product-item-price">$28.00</td>
												<td className="product-item-quantity">
													<div className="quantity btn-quantity max-w80">
														<Form>
															<Form.Group controlId="exampleForm.SelectCustom">
																
																	<Form.Control as="select" custom>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</Form.Control>
															</Form.Group>
														</Form>
													</div>
												</td>
												<td className="product-item-totle">
													<Link to={'/shop-cart'} className="btn btnhover">Add To Cart</Link>
												</td>
												<td className="product-item-close">
													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
												</td>
											</tr>
											<tr className="alert">
												<td className="product-item-img">
													<img src={require('./../../images/product/thumb/item2.jpg')} alt="" />
												</td>
												<td className="product-item-name">Burger</td>
												<td className="product-item-price">$28.00</td>
												<td className="product-item-quantity">
													<div className="quantity btn-quantity max-w80">
														<Form>
															<Form.Group controlId="exampleForm.SelectCustom">
																
																	<Form.Control as="select" custom>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</Form.Control>
															</Form.Group>
														</Form>
													</div>
												</td>
												<td className="product-item-totle">
													<Link to={'/shop-cart'} className="btn btnhover">Add To Cart</Link>
												</td>
												<td className="product-item-close">
													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
												</td>
											</tr>
											<tr className="alert">
												<td className="product-item-img">
													<img src={require('./../../images/product/thumb/item3.jpg')} alt="" />
												</td>
												<td className="product-item-name">Cup Cake</td>
												<td className="product-item-price">$28.00</td>
												<td className="product-item-quantity">
													<div className="quantity btn-quantity max-w80">
														<Form>
															<Form.Group controlId="exampleForm.SelectCustom">
																
																	<Form.Control as="select" custom>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</Form.Control>
															</Form.Group>
														</Form>
													</div>
												</td>
												<td className="product-item-totle">
													<Link to={'/shop-cart'} className="btn btnhover">Add To Cart</Link>
												</td>
												<td className="product-item-close">
													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
												</td>
											</tr>
											<tr className="alert">
												<td className="product-item-img">
													<img src={require('./../../images/product/thumb/item4.jpg')} alt="" />
												</td>
												<td className="product-item-name">Pizza</td>
												<td className="product-item-price">$28.00</td>
												<td className="product-item-quantity">
													<div className="quantity btn-quantity max-w80">
														<Form>
															<Form.Group controlId="exampleForm.SelectCustom">
																
																	<Form.Control as="select" custom>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</Form.Control>
															</Form.Group>
														</Form>
													</div>
												</td>
												<td className="product-item-totle">
													<Link to={'/shop-cart'} className="btn btnhover">Add To Cart</Link>
												</td>
												<td className="product-item-close">
													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
												</td>
											</tr>
											<tr className="alert">
												<td className="product-item-img">
													<img src={require('./../../images/product/thumb/item5.jpg')} alt="" />
												</td>
												<td className="product-item-name">Burger</td>
												<td className="product-item-price">$28.00</td>
												<td className="product-item-quantity">
													<div className="quantity btn-quantity max-w80">
														<Form>
															<Form.Group controlId="exampleForm.SelectCustom">
																
																	<Form.Control as="select" custom>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</Form.Control>
															</Form.Group>
														</Form>
													</div>
												</td>
												<td className="product-item-totle">
													<Link to={'/shop-cart'} className="btn btnhover">Add To Cart</Link>
												</td>
												<td className="product-item-close">
													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
												</td>
											</tr>
										</tbody>
									</table>
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

export default Shopwishlist; 