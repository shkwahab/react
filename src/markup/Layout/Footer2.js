import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer2 extends Component{
	render(){
		return(
			<footer className="site-footer pizza-footer">
				<div className="p-tb60 text-center bg-black-1">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="logo-footer">
									<Link to={"./"}><img src={require("./../../images/logo-2.png")} alt="" /> </Link>
								</div>
								<div className="widget-link"> 
									<ul>
										<li><Link to={"/"}>Home</Link></li> 
										<li><Link to={"/about-2"}>About Us</Link></li> 
										<li><Link to={"/faq"}>Faq</Link></li> 
										<li><Link to={"/contact-1"}>Contact Us</Link></li> 
									</ul>
								</div>
								<p className="copyright">Copyright © 2021 DexignZone. all rights reserved.</p>
								<ul className="dlab-social-icon">
									<li><Link className="btn white outline circle mr-2"><i className="fa fa-facebook"></i></Link></li>
									<li><Link className="btn white outline circle mr-2"><i className="fa fa-google-plus"></i></Link></li>
									<li><Link className="btn white outline circle mr-2"><i className="fa fa-linkedin"></i></Link></li>
									<li><Link className="btn white outline circle mr-2"><i className="fa fa-twitter"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}

}

export default Footer2;
