import React, {Component} from 'react';



class Menuitem extends Component{
	render(){
		return(
			<div className="row">
				<div className="col-lg-6">
					<ul className="menu-list m-b0">
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i> cookies<small>SPECIAL</small>
									</span>
								</h4>
								<p className="price">$2.55</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>fruit cake</span>
								</h4>
								<p className="price">$3.65</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>biscuits</span>
								</h4>
								<p className="price">$4.29</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>lemon cake</span>
								</h4>
								<p className="price">$2.99</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>berry tart</span>
								</h4>
								<p className="price">$5.15</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
					</ul>
				</div>
				<div className="col-lg-6">
					<ul className="menu-list">
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>wedding cake</span>
								</h4>
								<p className="price">$2.55</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>child cake</span>
								</h4>
								<p className="price">$3.65</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>vegan pie</span>
								</h4>
								<p className="price">$4.29</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>birthday cake</span>
								</h4>
								<p className="price">$2.99</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
						<li>
							<div className="menu-item">
								<h4 className="title">
									<span><i className="la la-check-circle-o"></i>pancake</span>
								</h4>
								<p className="price">$5.15</p>
							</div>
							<p className="description">Lorem ipsum dolor sit amet consectetur elit</p>
						</li>
					</ul>
				</div>
			</div>
		
		)
	
	}
}

export default Menuitem;