import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './../Element/Ravslider';

import Header2 from './../Layout/Header2';
import Footer2 from './../Layout/Footer2';
import Tab from './../Pages/Tab';
import Owl2 from './../Element/Owl2';



var img1 = require('./../../images/overlay/pt1.jpg');



class Index2 extends Component{
	render(){
		return(
			<div>
				<div class="page-wraper font-barlow">
					
					<Header2 />
					
					<Banner />
					
						 					
					<div class="section-full content-inner bg-white" style={{backgroundImage:"url(" + img1 + ")"}}>
						<div class="container">
							<div class="row">
								<div class="col-lg-6 col-md-12">
									<div class="adv-box">
										<Link to={"/shop-sidebar"}><img src={require("./../../images/ads/adv1.jpg")} alt="" /></Link>
									</div>
								</div>
								<div class="col-lg-6 col-md-12">
									<div class="row">
										<div class="col-lg-6 col-md-6">
											<div class="adv-box">
												<Link to={"/shop-sidebar"}><img src={require("./../../images/ads/adv2.jpg")} alt="" /></Link>
											</div>
										</div>
										<div class="col-lg-6 col-md-6">
											<div class="adv-box">
												<Link to={"/shop-sidebar"}><img src={require("./../../images/ads/adv3.jpg")} alt="" /></Link>
											</div>
										</div>
										<div class="col-lg-12 col-md-12">
											<div class="adv-box">
												<Link to={"/shop-sidebar"}><img src={require("./../../images/ads/adv4.jpg")} alt="" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
					
					
					<div class="section-full bg-white">
						<div class="row sp0">
							<div class="col-lg-6">
								<img src={require("./../../images/menu/pic1.jpg")} alt="" class="img-cover" />
							</div>
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">Pizza Menu</h4>
										<h2 class="title">RestroKing Pizza, The Best In Town</h2>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">Pepperoni Pizza</h5>
												<div class="line"></div>
												<span class="price">14.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Apricot Chicken</h5>
												<div class="line"></div>
												<span class="price">07.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Pizza Veronese</h5>
												<div class="line"></div>
												<span class="price">14.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Summer Pizza</h5>
												<div class="line"></div>
												<span class="price">23.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Italian Tuna</h5>
												<div class="line"></div>
												<span class="price">79.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Liguria Pizza</h5>
												<div class="line"></div>
												<span class="price">22.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row manu-box-reverse sp0">
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">Pizza Menu</h4>
										<h2 class="title">Festive Season Offers</h2>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">Pepperoni Pizza</h5>
												<div class="line"></div>
												<span class="price">14.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Apricot Chicken</h5>
												<div class="line"></div>
												<span class="price">07.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Pizza Veronese</h5>
												<div class="line"></div>
												<span class="price">14.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Summer Pizza</h5>
												<div class="line"></div>
												<span class="price">23.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Italian Tuna</h5>
												<div class="line"></div>
												<span class="price">79.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Liguria Pizza</h5>
												<div class="line"></div>
												<span class="price">22.99</span>
											</div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-6">
								<img src={require("./../../images/menu/pic2.jpg")} alt="" class="img-cover" />
							</div>
						</div>
					</div>
					
					<Tab  />
					
					
					<div class="section-full bg-white pizza-full-menu">
						<img src={require("./../../images/ads/adv.jpg")} alt="" />
					</div>  
					
					
					<Owl2 />
					
					
					<div class="section-full bg-primary p-tb50 newslatter-area">
						<div class="container">
							<div class="row align-items-center">
								<div class="col-md-6 text-white">
									<h5 class="m-b0">Love Pizza? Like deals? Be the first to know about our newest menu items and latest offers. More food. less money.</h5>
								</div>
								<div class="col-md-6">
									<form class="dzSubscribe newslatter" action="script/mailchamp.php" method="post">
										<div class="dzSubscribeMsg"></div>
										<div class="input-group">
											<input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email"/>
											<div class="input-group-append">
												<button name="submit" value="Submit" type="submit" class="btn radius-xl">Subscribe Now</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					
					
					
				</div>
				
				<Footer2 />
			</div>	
			
		)	
	}
}

export default Index2;