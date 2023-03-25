import * as React from "react"

const HeroSection: React.FC = () => {
    return (   
		<section className="hero-section">
			<h1 className="hero-title"> Hi, I'm Mohamed Iheb Faiza <br/> But you can call me Iheb</h1>
			<p className="hero-description">I'm a <span className="underline">Software Engineer</span></p>
		</section>
    )
}

export default HeroSection