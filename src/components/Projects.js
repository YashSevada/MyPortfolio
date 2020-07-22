import React,{useState} from 'react'
import { Button, Grid , Cell, Tabs, Tab, Card, CardTitle, CardText, CardActions} from 'react-mdl'
import '../App.css'

const Projects = () => {

  const [state, setState] = useState({
    activeTab:0
  })
  
  const displayCardFunction = () => {
    if(state.activeTab === 0){
      return(
        <div style={{display:'flex'}}>
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Web Development Project 1
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Web Development Project 2
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
      )
    }else if(state.activeTab === 1){
      return(
        <div style={{display:'flex'}}>
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                   MERN 1
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    MERN 2
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    MERN 3
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
      )
    }else if(state.activeTab === 2){
      return(
        <div>
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Machine Learning 1
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
      )
    }
  }

    return (
        <div className="projects-main">
         <Tabs activeTab={state.activeTab} onChange={(currentTabID)=>{setState({...state,activeTab:currentTabID})}} >
           <Tab>Web Development</Tab>
           <Tab>MERN Stack</Tab>
           <Tab>Machine Learning</Tab>
         </Tabs>
         <section>
           <Grid>
             <Cell col={9} style={{margin:'auto'}}>
                 {displayCardFunction()}
             </Cell>
           </Grid>
         </section>
        </div>
    )
}

export default Projects
