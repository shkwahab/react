import React,{Component} from 'react';
import {Link} from 'react-router-dom';

var bnr = require('./../../images/main-slider/slide10.jpg');

class Banner extends Component{
	
	render(){
		return(
			
			<div className= "banner">	
				<div className="section-full content-inner bnr-bg" style={{backgroundImage: "url(" + bnr + ")", backgroundSize: "100%" }}>
					<div className="container">
						
						<div class="row">
							<div class="col-lg-6 text-center">
								<div class="content">
									<h2 className="title">Super <br/> Delicious <br/> Pizza</h2>
									
									<div className= "bnr-logo">
										<img src ={require('./../../images/main-slider/slide5.png')}  alt="offer" />
									</div>	
									
									<p className="info">Aliquam vulputate, tortor nec commodo ultricies,vitae viverra urna nulla sed turpis. Nullam lacinia 	faucibus risus, a euismod.</p>
									
									<Link to={''} className="btn white"  data-target="#exampleModal">Buy Now</Link>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		
		)
		
	}
}

export default Banner;