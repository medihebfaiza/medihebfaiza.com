import * as React from "react"

import avatar from "../../images/avatar.png"

const AboutSection: React.FC = () => {
    return (   
		<section className="about-section">
			<h1>About me</h1>
			<div className="container">
				<div className="about-description">
					I'm a Polytech Montpellier graduate with an Engineering Degree in Computer Science and Management.<br/>
					I currently work at Ivalua as a Project Engineer.<br/>
					I love Javascript, C++ and C# and I'm also interested in Design, Photography and Video Editing.
				</div>
				<img className="about-img" height="300px" src={avatar}></img>
			</div>
		</section>
    )
}

export default AboutSection