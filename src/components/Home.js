import React from 'react'
import {Grid, Cell, Button} from 'react-mdl'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faStackOverflow, faPython, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

const Home = () => {
    return (
        <div>
        <Grid className="home-grid" >
            <Cell col={12} className="cell">
                <div className="container">    
                    <img src="Images/yash.jpg" alt="Avatar" className="image"/>
                </div>
            </Cell>
        

                    <div className="banner-text" >
                        <h1>Student</h1>
                        <hr/>
                        <p>
                            Web Development | Machine Learning | MERN Stack | Android Development
                        </p>
                        <div className="home-icons">
                            <a href="https://github.com/YashSevada" target="_blank">
                                <span >
                                    <FontAwesomeIcon icon={faGithub} />
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/yash-sevada-928a92178/" target="_blank">
                                <span>
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </span>
                            </a>
                            <a href="#" target="_blank">
                                <span>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </span>
                            </a>
                            <a href="#" target="_blank">
                                <span>
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </span>
                            </a>
                        </div>
                    </div>
                    
            </Grid>
        </div>
    )
}

export default Home
