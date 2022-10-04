import AnimatedLatters from '../AnimatedLetters';
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import Loader from 'react-loaders';

const About = () => { 

  
    const [letterClass, setLetterClass] = useState('text-animate') // both class are undefind problem 


    setTimeout(() => {
        setLetterClass('text-animate-hover')
    },3000);
    
    return (
      <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLatters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                        idx={15} />
                </h1>
                <p>
                I'm web developer, strong in design and integration with intuitive problem-solving skills, 
                with all basic skills like data structures and algorithms, looking to start a career as an 
                entry level software engineer. 
                </p>
                <p>
                I'm quietly confident, naturally curious, and perpetually working on improving my
                chops one design problem at a time.   
                </p>
                <p>
                I am ambitious and driven. I thrive on challenge and constantly set goals for myself, 
                so I have something to strive towards. I am not comfortable with settling, and I am always 
                looking for an opportunity to do better and achieve greatness.    
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                        <div className="face1">
                          <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className=" face4">
                          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className=" face6">                               
                          <FontAwesomeIcon icon = {faGitAlt} color="#EC4" />
                        </div>
                </div>
            </div>

        </div>
        <Loader type="pacman" style={{color: "#ffd700"}}/>
      </>
    );  
}

export default About;