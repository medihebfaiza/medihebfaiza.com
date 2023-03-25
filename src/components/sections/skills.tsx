import * as React from "react"

import Java from "../../images/Java.svg"
import { SiReact, SiAngular, SiCsharp, SiCplusplus, SiDotnet, IconType } from '@icons-pack/react-simple-icons';

const SkillsSection: React.FC = () => {
    return (
        <section className="skills-section">
			<h1 className="section-title">Skills</h1>
			<div className="container skills-list">
				<div className="skill">
					<div className="skill-logo"><img alt="Java logo" height={100} src={Java}></img></div>
					<div className="skill-name">Java</div>
				</div>
				<div className="skill">
					<div className="skill-logo"><SiCplusplus color='default' size={100} /></div>
					<div className="skill-name">C++</div>
				</div>
				<div className="skill">
					<div className="skill-logo"><SiCsharp color='default' size={100} /></div>
					<div className="skill-name">C#</div>
				</div>
				<div className="skill">
					<div className="skill-logo"><SiDotnet color='default' size={100} /></div>
					<div className="skill-name">.NET</div>
				</div>
				<div className="skill">
					<div className="skill-logo"><SiAngular color='default' size={100} /></div>
					<div className="skill-name">Angular</div>
				</div>
				<div className="skill">
					<div className="skill-logo"><SiReact color='default' size={100} /></div>
					<div className="skill-name">React JS</div>
				</div>
			</div>
		</section>
    )
}

export default SkillsSection