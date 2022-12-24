import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

import {Form} from 'react-bootstrap';

var bnr = require('./../../images/banner/bnr1.jpg');

class Shopchekout extends Component{
	
	render(){
		return(
			<>
			<Header />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: "url(" + bnr + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Checkout</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Checkout</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner">
					
					<div className="container">
						<form className="shop-form">
							<div className="row">
								<div className="col-lg-6 col-md-12 m-b30">
									<h3>Billing & Shipping Address</h3>
									<div className="form-group">
										<Form.Group controlId="exampleForm.ControlSelect1">
											
											<Form.Control as="select" >
												<option value="">Åland Islands</option>
												<option value="">Afghanistan</option>
												<option value="">Albania</option>
												<option value="">Algeria</option>
												<option value="">Andorra</option>
												<option value="">Angola</option>
												<option value="">Anguilla</option>
												<option value="">Antarctica</option>
												<option value="">Antigua and Barbuda</option>
												<option value="">Argentina</option>
												<option value="">Armenia</option>
												<option value="">Aruba</option>
												<option value="">Australia</option>
											</Form.Control>	
											
										</Form.Group>
									</div>
									<div className="row">
										<div className="form-group col-md-6">
											<input type="text" className="form-control" placeholder="First Name" />
										</div>
										<div className="form-group col-md-6">
											<input type="text" className="form-control" placeholder="Last Name" />
										</div>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Company Name" />
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Address" />
									</div>
									<div className="row">
										<div className="form-group col-md-6">
											<input type="text" className="form-control" placeholder="Apartment, suite, unit etc." />
										</div>
										<div className="form-group col-md-6">
											<input type="text" className="form-control" placeholder="Town / City" />
										</div>
									</div>
									<div className="row">
										<div className="form-group col-md-6">
											<input type="text" className="form-control" placeholder="State / County" />
										</div>
										<div className="form-group col-md-6">
											<input type="text" className="form-control" placeholder="Postcode / Zip" />
										</div>
									</div>
									<div className="row">
										<div className="form-group col-md-6">
											<input type="email" className="form-control" placeholder="Email" />
										</div>
										<div className="form-group col-md-6">
											<input type="text" className="form-control" placeholder="Phone" />
										</div>
									</div>
									<h4>
										<button className="btn-link text-black" type="button" data-toggle="collapse" data-target="#create-an-account">Create an account 
											<i className="fa fa-angle-down"></i>
										</button>
									</h4>
									<div id="create-an-account" className="collapse">
										<p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
										<div className="form-group">
											<input type="password" className="form-control" placeholder="Password" />
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 m-b30 m-md-b0">
									<h3><button className="btn-link text-black" type="button" data-toggle="collapse" data-target="#different-address">Ship to a different address <i className="fa fa-angle-down"></i></button></h3>
									<div id="different-address" className="collapse">
										<p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>
										<div className="form-group">
											<Form.Group controlId="exampleForm.ControlSelect1">
											
												<Form.Control as="select" >
													<option value="">Åland Islands</option>
													<option value="">Afghanistan</option>
													<option value="">Albania</option>
													<option value="">Algeria</option>
													<option value="">Andorra</option>
													<option value="">Angola</option>
													<option value="">Anguilla</option>
													<option value="">Antarctica</option>
													<option value="">Antigua and Barbuda</option>
													<option value="">Argentina</option>
													<option value="">Armenia</option>
													<option value="">Aruba</option>
													<option value="">Australia</option>
												</Form.Control>	
												
											</Form.Group>
										</div>
										<div className="row">
											<div className="form-group col-md-6">
												<input type="text" className="form-control" placeholder="First Name" />
											</div>
											<div className="form-group col-md-6">
												<input type="text" className="form-control" placeholder="Last Name" />
											</div>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Company Name" />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Address" />
										</div>
										<div className="row">
											<div className="form-group col-md-6">
												<input type="text" className="form-control" placeholder="Apartment, suite, unit etc." />
											</div>
											<div className="form-group col-md-6">
												<input type="text" className="form-control" placeholder="Town / City" />
											</div>
										</div>
										<div className="row">
											<div className="form-group col-md-6">
												<input type="text" className="form-control" placeholder="State / County" />
											</div>
											<div className="form-group col-md-6">
												<input type="text" className="form-control" placeholder="Postcode / Zip" />
											</div>
										</div>
										<div className="row">
											<div className="form-group col-md-6">
												<input type="email" className="form-control" placeholder="Email" />
											</div>
											<div className="form-group col-md-6">
												<input type="text" className="form-control" placeholder="Phone" />
											</div>
										</div>
										<p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
									</div>
									<div className="form-group">
										<textarea className="form-control" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
									</div>
								</div>
							</div>
						</form>
						<div className="dlab-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark"></i></div>
						<div className="row">
							<div className="col-lg-6">
								<h3>Your Order</h3>
								<table className="table-bordered check-tbl">
									<thead>
										<tr>
											<th>IMAGE</th>
											<th>PRODUCT NAME</th>
											<th>TOTAL</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><img src={require('./../../images/product/item1.jpg')} alt="" /></td>
											<td>Cup Cake</td>
											<td className="product-price">$28.00</td>
										</tr>
										<tr>
											<td><img src={require('./../../images/product/item2.jpg')} alt="" /></td>
											<td>Pizza</td>
											<td className="product-price">$36.00</td>
										</tr>
										<tr>
											<td><img src={require('./../../images/product/item3.jpg')} alt="" /></td>
											<td>Burger</td>
											<td className="product-price">$28.00</td>
										</tr>
										<tr>
											<td><img src={require('./../../images/product/item4.jpg')} alt="" /></td>
											<td>Chow Mein</td>
											<td className="product-price">$36.00</td>
										</tr>
										<tr>
											<td><img src={require('./../../images/product/item5.jpg')} alt="" /></td>
											<td>Pizza</td>
											<td className="product-price">$28.00</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="col-lg-6">
								<form className="shop-form">
									<h3>Order Total</h3>
									<table className="table-bordered check-tbl">
										<tbody>
											<tr>
												<td>Order Subtotal</td>
												<td className="product-price">$125.96</td>
											</tr>
											<tr>
												<td>Shipping</td>
												<td>Free Shipping</td>
											</tr>
											<tr>
												<td>Coupon</td>
												<td className="product-price">$28.00</td>
											</tr>
											<tr>
												<td>Total</td>
												<td className="product-price-total">$506.00</td>
											</tr>
										</tbody>
									</table>
									<h4>Payment Method</h4>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Name on Card" />
									</div>
									<div className="form-group">
										<Form.Group controlId="exampleForm.ControlSelect1">
											
											<Form.Control as="select" >
												<option value="">Credit Card Type</option>
												<option value="">Another option</option>
												<option value="">A option</option>
												<option value="">Potato</option>
											</Form.Control>	
												
										</Form.Group>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Credit Card Number" />
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Card Verification Number" />
									</div>
									<div className="form-group">
										<button className="btn button-lg btnhover btn-block" type="button">Place Order Now </button>
									</div>
								</form>
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

export default Shopchekout;