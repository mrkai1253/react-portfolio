import React, { Component } from 'react';
import './App.css'; 
import 'antd/dist/antd.css';
import Intro  from "./components/intro";
import Projects from './components/projects'




class App extends Component {
  render() {
    return (
      <div className="App">
    
        <Intro/>
        <Projects/> 

        <h1 style ={{textAlign:'center',fontSize:15,fontFamily:'Nunito',fontWeight:500}}>© Asish Shaji Thomas</h1>
        
      </div>
    );
  }
}

export default App;
