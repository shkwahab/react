import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class PriceTable extends Component{
	render(){
		return(
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-head text-center">
							<h3>Our Expert Chefs</h3>
							<p>Meet our professional team meambers</p>
						</div>
					</div>
				</div>
				<div class="pricingtable-row">
					<div class="row">
						<div class="col-sm-12 col-md-4 col-lg-4">
							<div class="pricingtable-wrapper">
								<div class="pricingtable-inner">
									<div class="pricingtable-price"> <span class="pricingtable-bx">$10</span> <span class="pricingtable-type">Month</span> </div>
									<div class="pricingtable-title bg-primary">
										<h4>Basic</h4>
									</div>
									<ul class="pricingtable-features">
										<li><i class="fa fa-check"></i> Full Responsive </li>
										<li><i class="fa fa-check"></i> Multi color theme</li>
										<li><i class="fa fa-check"></i> With Bootstrap</li>
										<li><i class="fa fa-check"></i> Easy to customize</li>
										<li><i class="fa fa-check"></i> Many Sortcodes</li>
									</ul>
									<div class="pricingtable-footer"> <Link to = {''} class="btn btnhover">Sign Up</Link> </div>
								</div>
							</div>
						</div>
						<div class="col-sm-12 col-md-4 col-lg-4">
							<div class="pricingtable-wrapper">
								<div class="pricingtable-inner pricingtable-highlight">
									<div class="pricingtable-price"> <span class="pricingtable-bx">$12</span> <span class="pricingtable-type">Month</span> </div>
									<div class="pricingtable-title bg-primary">
										<h4>Professional</h4>
									</div>
									<ul class="pricingtable-features">
										<li><i class="fa fa-check"></i> Full Responsive </li>
										<li><i class="fa fa-check"></i> Multi color theme</li>
										<li><i class="fa fa-check"></i> With Bootstrap</li>
										<li><i class="fa fa-check"></i> Easy to customize</li>
										<li><i class="fa fa-check"></i> Many Sortcodes</li>
									</ul>
									<div class="pricingtable-footer"> <Link to = {''} class="btn btnhover">Sign Up</Link> </div>
								</div>
							</div>
						</div>
						<div class="col-sm-12 col-md-4 col-lg-4">
							<div class="pricingtable-wrapper">
								<div class="pricingtable-inner">
									<div class="pricingtable-price"> <span class="pricingtable-bx">$18</span> <span class="pricingtable-type">Month</span> </div>
									<div class="pricingtable-title bg-primary">
										<h4>Extended</h4>
									</div>
									<ul class="pricingtable-features">
										<li><i class="fa fa-check"></i> Full Responsive </li>
										<li><i class="fa fa-check"></i> Multi color theme</li>
										<li><i class="fa fa-check"></i> With Bootstrap</li>
										<li><i class="fa fa-check"></i> Easy to customize</li>
										<li><i class="fa fa-check"></i> Many Sortcodes</li>
									</ul>
									<div class="pricingtable-footer"> <Link to = {''} class="btn btnhover">Sign Up</Link> </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		)
	}
	
} 

export default PriceTable;