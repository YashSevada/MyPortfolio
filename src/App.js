import React from 'react';
import {Header, Navigation, Drawer, Content, Layout} from 'react-mdl';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css'
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
     <div className="demo-big-content">
      <Layout  className="layout-background">
        <Header title="Yash Sevada" className="appbarcss" scroll style={{color:'#11FFBD'}}>
            <Navigation>
                <Link to="/" style={{color:'#11FFBD'}}>Home</Link>
                <Link to="/about" style={{color:'#11FFBD'}}>About</Link>
                <Link to="/project" style={{color:'#11FFBD'}}>Projects</Link>
                <Link to="/resume" style={{color:'#11FFBD'}}>Resume</Link>
                <Link to="/contact" style={{color:'#11FFBD'}}>Contacts</Link>
            </Navigation>
        </Header>
        <Drawer title="Yash Sevada" style={{background:'#16222A', color:'white'}}>
            <Navigation >
                <Link to="/" style={{color:'#11FFBD'}}>Home</Link>
                <Link to="/about" style={{color:'#11FFBD'}}>About</Link>
                <Link to="/project" style={{color:'#11FFBD'}}>Projects</Link>
                <Link to="/resume" style={{color:'#11FFBD'}}>Resume</Link>
                <Link to="/contact" style={{color:'#11FFBD'}}>Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/project" component={Projects}/>
                <Route exact path="/resume" component={Resume}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </Content>
    </Layout>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
