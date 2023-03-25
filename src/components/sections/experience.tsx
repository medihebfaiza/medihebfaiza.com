import * as React from "react"
import experiences from "../../data/experiences"

const ExperienceSection: React.FC = () => {
    return (  
         
		<section className="experience-section">
			<h1 className="section-title">Experience</h1>
			<div className="experience-list">
                {
                    experiences.map( (experience: any, index: Number) => 
                    <>
                        <div className="container experience">
                            <div className="experience-logo">
                                <img src={experience.logo} width={70}></img>
                            </div>
                            <div className="experience-details">
                                <small className="experience-year">{experience.year}</small>{", "}
                                <small className="experience-location">{experience.location}</small><br/>
                                <strong className="experience-company">{experience.company}</strong>
                                <p className="experience-text">{experience.text}</p>
                                <i className="experience-skills">{experience.skills}</i>
                            </div>
                        </div>
                        {index!=experiences.length-1 ? <div className="vertical-line"></div> : <></>}
                    </>
                    )
                }
			</div>
		</section>
    )
}

export default ExperienceSection