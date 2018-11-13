import React, { Component } from 'react';
import './App.css';
import Chat from './chatbox/Chatbox'; 
import Code from './codebox/Code';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        
        <div className="container" >
       
       <div className="row">
         <div id="chat" className="col">
            <Code/>
          </div>
         <div id="code" className="col">
            <Chat/>
         </div>
       </div>
       </div>
        
      </div>
    );
  }
}

export default App;
