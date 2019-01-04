import React, { Component } from 'react';

class About extends Component{
	render(){
		return(
			<div className="row row-content">
				<div className="col-12">
					<hr />
					<h2>Our Goals</h2>
					<hr />
				</div>
				<div className="col-12">
					<h3>Vision</h3>
					<p>We are a company that is aspiring to use wearable technology to prevent further cases of sexual assault on college campuses. Our team is comprised of four motivational high school students that would like to impact the world in a positive way. </p>
					<p>Our company will offer a wristband where the user will be able to pinch the bracelet and contact designated people of their current situation and location. If the the user is pressured at any way, they would be able to contact their friends or family and the police if necessary. The bracelet will be able to contact designated people and the police and it will be able to determine the altitude in order to provide a more precise location of the user.</p>
					<h3>Mission</h3>
					<p> To mitigate sexual assault rates by connecting communities through wearable technology.</p>
					<hr />
				</div>                
            </div>
        );
    }
}

export default About;