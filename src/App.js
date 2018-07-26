import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(()=>{
      
      //const instructors = this.state.instructors.slice();
      const iIndex = Math.floor(Math.random() * this.state.instructors.length);
      const hIndex = Math.floor(Math.random() * this.state.instructors[iIndex].hobbies.length);
      
      console.log(hIndex);
      
      //instructors[iIndex] = {name: this.state.instructors[iIndex].name,
      //                       hobbies: this.state.instructors[iIndex].hobbies.slice()
      //                      };
      //instructors[iIndex].hobbies.splice(hIndex,1);
      
      const instructors = this.state.instructors.map((e,i) => {
        if (i === iIndex) {
          const hobbies = e.hobbies.slice();
          hobbies.splice(hIndex,1);
          return {
            ...e,
            hobbies
          }
        }
        return e;
      })
      
      this.setState({instructors});
    },3000)
  }
  
  
  
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
