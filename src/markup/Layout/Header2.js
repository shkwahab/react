import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header2 extends Component{
	componentDidMount() {

        // sidebar open/close
		
        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');
       

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }
		
        btn.addEventListener('click', toggleFunc);
		
		/* Menu onpen/close */
		var menuBtn = document.querySelector('.menu-btn');
        var pizzaHeaderNav = document.querySelector('.pizza-header .header-nav');
       

        function menuBtnAddActive() {
            return pizzaHeaderNav.classList.add("active");
        }
		
        menuBtn.addEventListener('mouseenter', menuBtnAddActive);
		
		function menuBtnRemoveActive() {
            return pizzaHeaderNav.classList.remove("active");
        }
		
        pizzaHeaderNav.addEventListener('mouseleave', menuBtnRemoveActive);
		
		/* Test */
		

        // Sidenav li open close
		
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }
	}	
	
	
	
	render(){
		return(
			<header className="site-header mo-left header header-transparent pizza-header">
			
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix ">
						<div className="container clearfix">
							
							<div className="logo-header mostion">
								<Link to="./"><img src={require('./../../images/logo-2.png')} alt="" /></Link>
							</div>
							
							<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							
							<div className="extra-nav">
								<div className="extra-cell">
									<ul className="extra-info">
										<li>
											<div className="header-phone-no">
												<img src="images/icons/telephone.png" alt=""/>
												<span>24/7 pizza delivery service</span>
												<h2>920 234 5768</h2>
											</div>
										</li>
										<li>
											
											<div className="menu-btn ">
												<span></span>
												<span></span>
												<span></span>
											</div>
											
										</li>
									</ul>
									
								</div>
							</div>
							
							<div className="dlab-quik-search ">
								<form action="#">
									<input name="search" value="" type="text" className="form-control" placeholder="Type to search" />
									<span id="quik-search-remove"><i className="ti-close"></i></span>
								</form>
							</div>
							
							<div className="header-nav navbar-collapse collapse navbar myNavbar justify-content-end" id="navbarNavDropdown" >
								<div className="logo-header">
									<Link to={"./"}><img src={require('./../../images/logo-2.png')} alt="" /> </Link>
								</div>
								<ul className="nav navbar-nav">	
									<li className="active"><Link to={''}>Home<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"./"}>Home 01</Link></li>
											<li><Link to={"index-2"}>Home 02</Link></li>
										</ul>
									</li>
									<li><Link to={''}>Pages<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"/about-1"}>About Us</Link></li>
											<li><Link to={"/our-services"}>Our Services</Link></li>
											<li><Link to={"/faq"}>FAQs</Link></li>
											<li><Link to={"/booking"}>Booking</Link></li>
											<li><Link to={"/error-404"}>404 Error</Link></li>
											<li><Link to={"/calendar"}>Calendar</Link></li> 
											<li><Link to={"/team"}>Team</Link></li>
										</ul>
									</li>
									<li><Link to={''}>Our Menu<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"/our-menu"}>Menu Style 1</Link></li>
											<li><Link to={"/our-menu-2"}>Menu Style 2</Link></li>
											<li><Link to={"/our-menu-3"}>Menu Style 3</Link></li>
											<li><Link to={"/our-menu-4"}>Menu Style 4</Link></li>
										</ul>
									</li>
									<li className="has-mega-menu"><Link to={''}>Blog<i className="fa fa-chevron-down"></i></Link>
										<ul className="mega-menu">
											<li> <Link to={''}>Blog Grid</Link>
												<ul>
													<li><Link to={"/blog-grid-2"}>Grid 2</Link></li>
													<li><Link to={"/blog-grid-2-sidebar"}>Grid 2 sidebar</Link></li>
													<li><Link to={"/blog-grid-2-sidebar-left"}>Grid 2 sidebar left</Link></li>
													<li><Link to={"/blog-grid-3"}>Grid 3</Link></li>
												</ul>
											</li>
											<li> <Link to={''}>Blog Half Image</Link>
												<ul>
													<li><Link to ={"/blog-half-img"}>Half image</Link></li>
													<li><Link to ={"/blog-half-img-sidebar"}>Half image sidebar</Link></li>
													<li><Link to ={"/blog-half-img-left-sidebar"}>Half image sidebar left</Link></li>
												</ul>
											</li>
											<li> <Link to={''}>Blog Large Image</Link>
												<ul>
													<li><Link to ={"/blog-large-img"}>Large image</Link></li>
													<li><Link to ={"/blog-large-img-sidebar"}>Large image sidebar</Link></li>
													<li><Link to ={"/blog-large-img-left-sidebar"}>Large image sidebar left</Link></li>
												</ul>
											</li>
											<li> <Link to={''}>Blog Details</Link>
												<ul>
													<li><Link to ={"/blog-single"}>Single</Link></li>
													<li><Link to ={"/blog-single-sidebar"}>Single sidebar</Link></li>
													<li><Link to ={"/blog-single-left-sidebar"}>Single sidebar right</Link></li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<Link to={''}>Shop <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"/shop"}>Shop</Link></li>
											<li><Link to={"/shop-sidebar"}>Shop Sidebar</Link></li>
											<li><Link to={"/shop-product-details"}>Product Details</Link></li>
											<li><Link to={"/shop-cart"}>Cart</Link></li>
											<li><Link to={"/shop-wishlist"}>Wishlist</Link></li>
											<li><Link to={"/shop-checkout"}>Checkout</Link></li>
											<li><Link to={"/shop-login"}>Login</Link></li>
											<li><Link to={"/shop-register"}>Register</Link></li>
										</ul>
									</li>
									<li><Link to={''}>Contact Us <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu left">
											<li><Link to={"/contact-1"}>Contact Us 1</Link></li>
											<li><Link to={"/contact-2"}>Contact Us 2</Link></li>
										</ul>
									</li>
								</ul>
								<div className="dlab-social-icon">
									<ul>
										<li><Link className="site-button sharp-sm fa fa-facebook" to={''}></Link></li>
										<li><Link className="site-button sharp-sm fa fa-twitter" to={''}></Link></li>
										<li><Link className="site-button sharp-sm fa fa-linkedin" to={''}></Link></li>
										<li><Link className="site-button sharp-sm fa fa-instagram" to={''}></Link></li>
									</ul>
								</div>		
							</div>
						</div>
					</div>
				</div>
				
			</header>
			
		)
	}

} 

export default Header2;