import React, { Component } from 'react';


class OurPartners extends Component{
	render(){
		return(
			<div className="container ">
				
				<div className="row client-area1">
					<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 m-b30">
						<div className="client-logo" data-name="Bakery">
							<img src={require('./../../images/logos/logo1.jpg')} alt="" />
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 m-b30">
						<div className="client-logo" data-name="Bakery">
							<img src={require('./../../images/logos/logo2.jpg')} alt="" />
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 m-b30">
						<div className="client-logo" data-name="Bakery">
							<img src={require('./../../images/logos/logo3.jpg')} alt="" />
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 m-b30">
						<div className="client-logo" data-name="Bakery">
							<img src={require('./../../images/logos/logo4.jpg')} alt="" />
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 m-b30">
						<div className="client-logo" data-name="Bakery">
							<img src={require('./../../images/logos/logo5.jpg')} alt="" />
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 m-b30">
						<div className="client-logo" data-name="Bakery">
							<img src={require('./../../images/logos/logo6.jpg')} alt="" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default OurPartners;