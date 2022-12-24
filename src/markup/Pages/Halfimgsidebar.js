import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

import SideBar from './../Element/SideBar';

var img = require('./../../images/banner/bnr1.jpg'); 

const blogImg = [
	{
		image: require('./../../images/blog/grid/pic1.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic2.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic3.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic4.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic1.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic2.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic3.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic4.jpg'),
	},

] 

class Halfimgsidebar extends Component{
	render(){
		return(
			<>
			<Header />
			
			<div className="page-content bg-white">
        
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Blog half image with sidebar</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Blog half image with sidebar</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			
			
				<div className="section-full content-inner">
					<div className = "container">
						<div className= "row">
							<div className="col-lg-8 ">
								
								{blogImg.map((item,index) =>(
								<div className="blog-post blog-md clearfix blog-rounded">
								
									<div className="dlab-post-media dlab-img-effect zoom-slow " key={index}> 
										<Link to={'/blog-single'}><img src={item.image} alt="" /></Link> 
									</div>
									<div className="dlab-post-info">
										<div className="dlab-post-title">
											<h4 className="post-title"><Link to={'/blog-single'}>All You Need To Know About Restaurant</Link></h4>
										</div>
										<div className="dlab-post-meta">
											<div className="post-author-thumb">
												<img src={require('./../../images/testimonials/pic1.jpg')} alt="" />
											</div>
											<ul>
												<li className="post-author"><Link to={''}>Admin</Link> </li>
												<li className="post-date">20 february 2020</li>
											</ul>
										</div>
										<div className="dlab-post-text">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
										</div>
										<div className="dlab-post-readmore"> 
											<Link to={'/blog-single'} title="READ MORE" rel="bookmark" className="btn btn-sm btn1 btnhover"><i className="fa fa-angle-right"></i>READ MORE</Link>
										</div>
									</div>
									
								</div>
								))}
								<div className="pagination-bx clearfix primary rounded-sm text-center">
									<ul className="pagination ">
										<li className="previous"><Link to={''}><i className="ti-arrow-left"></i> Prev</Link></li>
										<li className="active"><Link to={''}>1</Link></li>
										<li><Link to={''}>2</Link></li>
										<li><Link to={''}>3</Link></li>
										<li className="next"><Link to={''}>Next <i className="ti-arrow-right"></i></Link></li>
									</ul>
								</div>
							
							</div>
							
							<SideBar />
							
						</div>	
					</div>	
				</div>
			</div>	
			
			<Footer />
			
			</>
		)
	}
}

export default Halfimgsidebar;