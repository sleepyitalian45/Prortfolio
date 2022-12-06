
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/card'
import './about.css'
import React from 'react'

const About = () => {
  return (
    <section id="about">
        <div className="container about_container">
            <div className="about_left">
                <div className="about_portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about_right">
                <h2>About Me</h2>
                <div className="about_cards">
                    {
                        data.map(item => (
                           <Card key={item.id} className="about_card">
                                <span className='about_card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>Building Pojects that my clients love has always been my passion. being in the web development indusrty for a little over a year now and serving more than 20 happy clints worldwide.</p>
                <p>Hi my name is Dominic Digiacomo from Long Island, New york. I'm a fullstack web developer with a Associates Degree in Computer Science accompanied by a Wed Developer cerifaction from Wake Technical Commnunity College. My top priority is to get your business up and running the right way, giving you industry-standard design and all the functionality you need to operate smoothly online.Get in touch today with the details of your project lets get started! Check out my resume below!</p>
                {/*<a href={CV} download className='btn primary'>Download CV <HiDownload/></a>*/}
            </div>
        </div>
    </section>
  )
}

export default About