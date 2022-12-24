import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const gridBlog = [
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
]
var img = require('./../../images/banner/bnr1.jpg');

const masonryOptions = {                                          
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Bloggrid extends Component{
	render(){
		return(
			<div className="dlab-blog-grid-2" id="masonry"  style={{width:"100%"}}>
			<Masonry
					className={'my-gallery-class'} // default ''
					options={masonryOptions} // default {}
					disableImagesLoaded={false} // default false
					updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
					imagesLoadedOptions={imagesLoadedOptions} // default {}
				>
					{gridBlog.map((item, index) => (
						<div className="post card-container col-lg-6 col-md-6 col-sm-12" key={index}>
							<div className="blog-post blog-grid blog-rounded blog-effect1">
								<div className="dlab-post-media dlab-img-effect"> 
									<Link to ={'/blog-single'}><img src = {item.image} alt="" /></Link> 
								</div>
								<div className="dlab-info">
									<div className="dlab-post-title ">
										<h4 className="post-title"><Link to={'blog-single'}>All You Need To Know About Restaurant</Link></h4>
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
										<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
									</div>
									<div className="dlab-post-readmore"> 
										<Link to={'/blog-single'} title="READ MORE" rel="bookmark" className="btn btn-sm btn1 btnhover"><i className="fa fa-angle-right"></i>READ MORE</Link>
									</div>
								</div>
							</div>
						</div>	
					))}
				
					<div className="pagination-bx clearfix primary rounded-sm col-md-12 text-center">
						<ul className="pagination">
							<li className="previous"><Link to={''}><i className="ti-arrow-left"></i> Prev</Link></li>
							<li className="active"><Link to={''}>1</Link></li>
							<li><Link to={''}>2</Link></li>
							<li><Link to={''}>3</Link></li>
							<li className="next"><Link to={''}>Next <i className="ti-arrow-right"></i></Link></li>
						</ul>
					</div>
				</Masonry>	
			</div>						
		)	
	}

}

export default Bloggrid;
