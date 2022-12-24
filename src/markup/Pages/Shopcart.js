import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Form} from 'react-bootstrap';

var img = require('./../../images/banner/bnr3.jpg');

class Shopcart extends Component{
	render(){
		return(
			<>
			<Header />
			
			 <div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Cart</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Shop Cart</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner">
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="table-responsive m-b50">
									<table className="table check-tbl">
										<thead>
											<tr>
												<th>Product</th>
												<th>Product name</th>
												<th>Unit Price</th>
												<th>Quantity</th>
												<th>Total</th>
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
												<td className="product-item-totle">$28.00</td>
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
												<td className="product-item-totle">$28.00</td>
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
												<td className="product-item-totle">$28.00</td>
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
												<td className="product-item-totle">$28.00</td>
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
												<td className="product-item-totle">$28.00</td>
												<td className="product-item-close">
													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-6 m-b30">
								<form className="shop-form"> 
									<h3>Calculate Shipping</h3>
									<div className="form-group">
										<Form.Group controlId="exampleForm.ControlSelect1">
											<Form.Control as="select">
												<option value="">Credit Card Type</option>
												<option value="">Another option</option>
												<option value="">A option</option>
												<option value="">Potato</option>
												
											</Form.Control>
										</Form.Group>
											
									</div>	
									<div className="row">
										<div className="form-group col-lg-6">
											<input type="text" className="form-control" placeholder="Credit Card Number" />
										</div>
										<div className="form-group col-lg-6">
											<input type="text" className="form-control" placeholder="Card Verification Number" />
										</div>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Coupon Code" />
									</div>
									<div className="form-group">
									<button className="btn btnhover" type="button">Apply Coupon</button>
								</div>
								</form>	
							</div>
							<div className="col-lg-6 col-md-6">
								<h3>Cart Subtotal</h3>
								<table className="table-bordered check-tbl">
									<tbody>
										<tr>
											<td>Order Subtotal</td>
											<td>$125.96</td>
										</tr>
										<tr>
											<td>Shipping</td>
											<td>Free Shipping</td>
										</tr>
										<tr>
											<td>Coupon</td>
											<td>$28.00</td>
										</tr>
										<tr>
											<td>Total</td>
											<td>$506.00</td>
										</tr>
									</tbody>
								</table>
								<div className="form-group">
									<button className="btn btnhover" type="button">Proceed to Checkout</button>
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


export default Shopcart;