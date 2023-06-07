// Module
import React from 'react';
// Fonctions
import Banner from '../../components/Banner/index'
import Collapse from '../../components/Collapse';
// Assets
import montagne from '../../assets/montagne.png';
// Data
import AboutData from '../../Data/AboutData.json'

function About() {
    return (
        <div>
            <Banner backgroundImage={montagne} />
            <main className='about'>
				{AboutData.map(data => {
					return (
						<div key={data.id} className="about-content">
							<Collapse  title={data.title} content={data.content} />
						</div>
					)}
				)}
			</main>
        </div>
    )
}

export default About