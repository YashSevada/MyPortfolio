import React from 'react'
import {Grid, Cell, Button} from 'react-mdl'

const Home = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
             <img src="Images/yash.jpg"  style={{height:'15%',width: '15%', display:'flex', justifyContent:'center', margin:'auto', marginTop:'8%', borderRadius:'100%' }}/>
            <Grid className="home-grid">
                <Cell col={12}  style={{display:'flex', justifyContent:'center'}}>
                    <img src="Images/signature.png"/>
                </Cell>

                    <div className="banner-text" >
                        <h1>Student</h1>
                        <hr/>
                        <p>
                            Web Development | Machine Learning | MERN Stack | Android Development
                        </p>
                    </div>
                
            </Grid>
        </div>
    )
}

export default Home
