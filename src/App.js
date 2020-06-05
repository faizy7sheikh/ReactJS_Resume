import React, { Fragment } from 'react';

import './App.css';

import Layout from './component/layout';
import Table from './component/table';
import Project from './component/project';
import Skill from './component/skill';
import Experience from './component/experience';
import Other from './component/other';
import Declaration from './component/declaration';

function App() {
  return (
    <Fragment>
    <div className="App container">
      <Layout 
      name="Faiyaz Ahmed"
      email="faizy7sheikh@gmail.com"
      mobile="+918250135043"
      address="Chikkabanvara,Banglore-90"/>

    <div className="row">
      <h3>Education</h3>
    </div>
     <Table/>
    <div className="row">
      <h3>Projects</h3>
    </div>
     <Project 
     name="Intelligent traffic light controller using embeded system"
     startDate="Feb 2018"
     endDate="May 2018"
     description="It is based on real time system. At different interval of time traffic is high peak and low peak
                 according to that we use algorith we can monitor the visualization with python and control with mobile Application"/>
    
    <Project 
     name="Digital Alarm Clock"
     startDate="March 2017"
     endDate="Apr 2017"
     description="A computer Graphics Project on OpenGL, Which works for digital to Analog speaking alram clock with 
     specific message"/>
    
    <Project 
     name="Web Design"
     startDate="Feb 2018"
     endDate="Apr 2018"
     description="School Management System for school database details maintaining."/>

    <div className="row">
      <h3>Skills</h3>
    </div>
    <Skill 
    name="Programming Language"
    details="Core Java, PHP, C"/>

    <Skill 
    name="Framework"
    details="Laravel, Bootstrap"/>

    <Skill 
    name="Web Technology"
    details="HTML, JavaScript, Jquery, CSS, Ajax"/>

    <Skill 
    name="Database"
    details="RDBMS, SQL"/>

    <Skill 
    name="Operating System"
    details="Linux, Winidow, Fedora"/>

    <Skill 
    name="IDE"
    details="Eclipse, Android Studio"/>

    <div className="row">
      <h3>Experience</h3>
    </div>

    <Experience
    name=" SprinkleWay Technologies Private Limited"
    src="https://www.sprinkleway.com"
    designation=" Software Developer"
    technologies=" Laravel, Bootstrap, Ajax, Jquery, HTML, PHP, SQL"/>

    <Experience
    name=" Xolcano Technologies Private Limited"
    src="https://www.xolcano.com"
    designation=" Software Developer"
    technologies=" Wordpress, HTML, CSS, JavaScript, PHP"/>

    <div className="row">
      <h3>Achievements</h3>
    </div>
    <Other
    details="Hold Rank 2 in previous academic year"/>

    <Other
    details="Secured silver medal in Vtu examination for academic year 2015-16"/>

    <Other
    details="Attended CONNECT TO THE WORLD OF IT NEWORKS"/>

    <Other
    details="Attended workshop on  'tends technologies in Artificial Neural Networks." />

    <div className="row">
      <h3>Strength</h3>
    </div>
    {/* strength */}
    <Other
    details="Team Worker"/>
    <Other
    details="Quick Learner"/>
    <Other
    details="Time Management"/>
    <Other
    details="Self-Management"/>

    <div className="row">
      <h3>Declaration</h3>
    </div>
    <Declaration/>
    <div class="row">
      <div class="col-md-12">
        <button onClick={printdoc} class="btn btn-success" id="download">Download</button>
      </div>
    </div>
     </div>
   </Fragment>
  );
}
function printdoc(event){
  window.print();
}

export default App;
