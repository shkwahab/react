import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

class Accord extends Component{
	render(){		
		return(
			<div className="dlab-accordion faq-style1">
				<Accordion defaultActiveKey="0">		
					<Accordion.Toggle className="panel" as={'div'}  eventKey="0">
						<div className="acod-head">
							<h6 className="acod-title"> 
								<Link to = {''} data-toggle="collapse" data-target="#collapse1" aria-expanded="true"> 
								<i className="fa fa-cart-plus"></i> Where buy our Cake?</Link> 
							</h6>
						</div>
						<Accordion.Collapse eventKey="0">
							<div id="collapse1" className="acod-body collapse show" data-parent="#accordion001">
								<div className="acod-content">
									<img src={require('./../../images/map.png')}  alt="" />
									<ul className="list-check mb-0 primary">
										<li><Link to = {''}>Germany (26)</Link></li>
										<li><Link to = {''}>France (19)</Link></li>
										<li><Link to = {''}>Itally (54)</Link></li>
										<li><Link to = {''}>England (76)</Link></li>
										<li><Link to = {''}>Canada (61)</Link></li>
										<li><Link to = {''}>Brazil (46)</Link></li>
										<li><Link to = {''}>Russia (17)</Link></li>
										<li><Link to = {''}>Africa (92)</Link></li>
										<li><Link to = {''}>USA (124)</Link></li>
										<li><Link to = {''}>Denmark (23)</Link></li>
										<li><Link to = {''}>Finland (41)</Link></li>
										<li><Link to = {''}>Asia (101)</Link></li>
									</ul>
								</div>
							</div>	
						</Accordion.Collapse>
					</Accordion.Toggle>	
					<Accordion.Toggle as={'div'} className="panel" eventKey="1">
						<div className="acod-head">
							<h6 className="acod-title"> 
								<Link to = {''} data-toggle="collapse" data-target="#collapse2" className="collapsed" aria-expanded="false">
								<i className="fa fa-address-book"></i> Become our dealer</Link> 
							</h6>
						</div>
					
						<Accordion.Collapse eventKey="1">
							<div id="collapse2" className="acod-body" data-parent="#accordion001">
								<div className="acod-content">
									<img src={require('./../../images/about/pic2.jpg')} className="alignleft radius-md" alt="" />
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
								</div>
							</div>
						</Accordion.Collapse>
					</Accordion.Toggle>	
					<Accordion.Toggle className="panel" as={'div'} eventKey="2">
						<div className="acod-head">
							<h6 className="acod-title"> 
								<Link to = {''} data-toggle="collapse" data-target="#collapse3" className="collapsed" aria-expanded="false">
								<i className="fa fa-cc-discover"></i> Get your discount</Link> 
							</h6>
						</div>
						<Accordion.Collapse eventKey="2">
							<div id="collapse2" className="acod-body" data-parent="#accordion001">
								<div className="acod-content">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
									<p> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
								</div>
							</div>
						</Accordion.Collapse>
					</Accordion.Toggle>	
				</Accordion>
			</div>	
		)
	}

}

export default Accord;