import React, {Component} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

var img =require('./../../images/overlay/pt1.jpg');


const responsive = {
  superLargeDesktop: {
   
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


class Owl2 extends Component{		
	render(){
		return(
			<div class="section-full bg-white content-inner-2" style={{backgroundImage:"url(" + img + " )" }}>
				<div class="container">
					<div class="section-head style-2 text-center">
						<h4 class="sub-title">Testimonial</h4>
						<h2 class="title">Client Review</h2>
					</div>
					
					<div class="testimonial-one ">
						<Carousel 
							autoPlay={this.props.deviceType !== "mobile" ? true : false}
							responsive={responsive}
													
						>
							
								<div class="testimonial-1">
									<div class="testimonial-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
									</div>
									<div class="testimonial-pic radius"><img src={require("./../../images/testimonials/pic1.jpg")} style={{width:"100", height:"100"}} alt="" /></div>
									<div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
								</div>
								<div class="testimonial-1">
									<div class="testimonial-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
									</div>
									<div class="testimonial-pic radius"><img src={require("./../../images/testimonials/pic1.jpg")} style={{width:"100", height:"100"}} alt="" /></div>
									<div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
								</div>
								<div class="testimonial-1">
									<div class="testimonial-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
									</div>
									<div class="testimonial-pic radius"><img src={require("./../../images/testimonials/pic1.jpg")} style={{width:"100", height:"100"}} alt="" /></div>
									<div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
								</div>
								<div class="testimonial-1">
									<div class="testimonial-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
									</div>
									<div class="testimonial-pic radius"><img src={require("./../../images/testimonials/pic1.jpg")} style={{width:"100", height:"100"}} alt="" /></div>
									<div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
								</div>
						</Carousel>
					</div>
				</div>		
			</div>	
		);	
	}	
}			


export default Owl2;