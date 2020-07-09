import React from 'react'
import {Grid, Cell} from 'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faSkype, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div>
            <div className='conact-main' >
                <Grid className="contact-grid" >
                    <Cell col={6} className="contact-cell1" >
                        <h2>Yash Sevada</h2>
                        <img src="Images/yash.jpg" height="180px"/>
                        <p>
                            The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link,
                        </p>
                    </Cell>

                    <Cell col={6} className="contact-cell2">
                        <h2>Contact me</h2>
                        <table>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPhoneSquare} style={{fontSize:'60px',lineHeight: '3em', float: 'left'}}/>
                                </td>
                                <td style={{lineHeight: '2.5em', float: 'center'}}>
                                    +91-8055425422
                                </td>
                            </tr>
                            <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'60px',lineHeight: '3em', float: 'center'}}/>
                                    </td>
                                    <td style={{lineHeight: '2.5em', float: 'right'}}>
                                        yashsevada2000@gmail.com
                                    </td>
                            </tr>
                        </table>
                    </Cell>

                </Grid>
            </div>
        </div>
    )
}

export default Contact
