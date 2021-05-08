import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Post from './components/Post';
import Project from './components/Project';
import About from './components/About';
import SingleProject from "./components/SingleProject";



function App() {

  return (
    <div className="App">
     <BrowserRouter>
         <NavBar/>
         <Switch>
             <Route component={Home} path="/" exact />
             <Route component={Post} path="/post" exact />
             <Route component={Project} path="/project" />
             <Route component={About} path="/about" />
             <Route component={SingleProject} path="/post/:slug" />
         </Switch>
     </BrowserRouter>
    </div>
  );



}

export default App;
