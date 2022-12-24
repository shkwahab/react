import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var img1 = require('./../../images/banner/bnr1.jpg');
var img2 = require('./../../images/background/bg5.jpg');

const defaultAccordion = [
	{ title: 'Web design aorem apsum dolor sit amet?', text: <ParaBlog />, },
	{ title: 'Graphic design aorem apsum dolor ?', text: <ParaBlog />, },
	{ title: 'Developement aorem apsum dolor sit amet?', text: <ParaBlog />, },
	{ title: 'True Responsiveness consectetuer adipiscing?', text: <ParaBlog />, },
	{ title: 'Claritas est etiam processus ?', text: <ParaBlog />, },
	{ title: 'Graphic design aorem apsum dolor ?', text: <ParaBlog />, },
	{ title: 'Developement aorem apsum dolor sit amet?', text: <ParaBlog />, },
	{ title: 'True Responsiveness consectetuer adipiscing?', text: <ParaBlog />, },
	{ title: 'Claritas est etiam processus ?', text: <ParaBlog />, },
	{ title: 'Graphic design aorem apsum dolor ?', text: <ParaBlog />, },
	{ title: 'Developement aorem apsum dolor sit amet?', text: <ParaBlog />, },
	{ title: 'Claritas est etiam processus ?', text: <ParaBlog />, },
		
]

const Faq = () => {	
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<>
			<Header />
			 <div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")", backgroundSize:"cover"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Faq's</h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>Faq's</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner bg-white faq-area" style={{ backgroundImage:"url( " + img2 + " )", backgroundSize:"100%"}}>
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-5">
									<div className="m-b50">
										<div className="about-thumb">
											<img src={require('./../../images/about/pic4.jpg')} alt="" />
										</div>
									</div>
									<div className="contact-form">
										<div className="title-bx">
											<div className="icon-bx-xs"> 
												<Link to={''} className="icon-cell text-white"><i className="fa fa-comment"></i></Link> 
											</div>
											<h4>Ask Us</h4>
										</div>
										<form>
											<div className="form-group">
												<label>Your Name (*)</label>
												<div className="input-group">
													<input name="dzName" type="text" required="" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group">
												<label>Your Email (*)</label>
												<div className="input-group">
													<input name="dzName" type="text" required="" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group">
												<label>Subject</label>
												<div className="input-group">
													<input name="dzName" type="text" required="" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group">
												<label>Select Service</label>
												<div className="input-group">
													<select className="form-control">
														<option>Cake </option>
														<option>Pastry</option>
														<option>Cookies</option>
													</select>
												</div>
											</div>
											<div className="form-group">
												<label>Your Question</label>
												<div className="input-group">
													<textarea className="form-control"></textarea>
												</div>
											</div>
											<div className="form-group">
												<button className="btn btn-md btnhover">Submit Now</button>
											</div>
										</form>
									</div>
								</div>
								<div className="col-lg-8 col-md-7 m-b30">
									<div className="faq-area2">
										<div className="row">
											<div className="col-lg-12">
												<div className="section-head text-left">
													<h3>Do You Have Any Questions?</h3>
													<p>Please read questions bellow and if you can not find your answer, please send us your question, we will answer you as soon as possible.</p>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12">
												<div className="title-bx">
													<div className="icon-bx-xs"> 
														<Link to={''} className="icon-cell text-white"><i className="fa fa-comment"></i></Link> 
													</div>
													<h4>Ask Us</h4>
												</div>	
												<Accordion className="dlab-accordion faq-style2"  defaultActiveKey="0">
													{defaultAccordion.map((d, i) => (
													    <div className="panel">
															<div className="acod-head">
																<Accordion.Toggle as={Link} variant="link"
																	className={` ${ activeDefault === i ? '' : 'collapsed'}`}
																	onClick={() =>
																		setActiveDefault(activeDefault === i ? -1 : i)
																	} eventKey={`${i}`}>	
																	 {d.title}		
																</Accordion.Toggle>
															</div>
														<Accordion.Collapse eventKey={`${i}`} className="acod-body collapse ">
															<div className="acod-content">
																{d.text}
															</div>
														</Accordion.Collapse>
													  </div>
													))}
												</Accordion>
														
												{/* <div className="dlab-accordion faq-style2" id="accordion001">
													<div className="panel">
														<div className="acod-head">
															<h6 className="acod-title"> 
																<Link to={''} data-toggle="collapse" data-target="#collapse1" aria-expanded="true"> 
																Web design aorem apsum dolor sit amet?</Link> 
															</h6>
														</div>
														<div id="collapse1" className="acod-body collapse show" data-parent="#accordion001">
															<div className="acod-content">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
															</div>
														</div>
													</div>
													<div className="panel">
														<div className="acod-head">
															<h6 className="acod-title"> 
																<Link to={''} data-toggle="collapse" data-target="#collapse2" className="collapsed" aria-expanded="false">Graphic design aorem apsum dolor ?</Link> 
															</h6>
														</div>
														<div id="collapse2" className="acod-body collapse" data-parent="#accordion001">
															<div className="acod-content">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
															</div>
														</div>
													</div>
												</div> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>          
			<Footer />
		</>
	)
	
}

function ParaBlog(){
	return(
		<>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
		</>
	)
}

export default Faq;