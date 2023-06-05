import React from 'react';
import Banner from '../../components/Banner/index'
import montagne from '../../assets/montagne.png';
import Collapse from '../../components/Collapse';
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