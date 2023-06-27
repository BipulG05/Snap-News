import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const  App =() =>  {
  const pageSize =15;
  const [progress,setProgress] = useState(0);
    return (
      <>
        <Router>
          <div className='bg-dark'>
          <LoadingBar color='#f11946'progress={progress} />
            <Navbar/>
            <Switch>
              <Route exact path="/">
                <News    setprogress={setProgress} key="home" pageSize={pageSize} country="in" category="general"/>
              </Route>
              <Route exact path="/business">
                <News    setprogress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/> 
              </Route> 
              <Route exact path="/entertainment">
                <News    setprogress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/> 
              </Route> 
              <Route exact path="/general">
                <News    setprogress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/> 
              </Route>
              <Route exact path="/health">
                <News    setprogress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/> 
              </Route> 
              <Route exact path="/science">
                <News    setprogress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/> 
              </Route> 
              <Route exact path="/sports">
                <News    setprogress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/> 
              </Route> 
              <Route exact path="/technology">
                <News    setprogress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/> 
              </Route>
              <Route exact path="/Server1">
                <News server={0}  setprogress={setProgress} key="Server1" pageSize={pageSize} country="in" category="general"/> 
              </Route>
              <Route exact path="/Server2">
                <News server={1}  setprogress={setProgress} key="Server2" pageSize={pageSize} country="in" category="technology"/> 
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  };

export default App
