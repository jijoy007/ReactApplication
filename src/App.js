import React from 'react';
import './App.css';
import Technologylist from './TechnologyList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      technologies:[],
      newTechnology:{
        key:'',
        text:'',
      }
    }
    this.addNewTechnology = this.addNewTechnology.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteTechnology = this.deleteTechnology.bind(this);
    this.updateTechnology = this.updateTechnology.bind(this);
  }
  addNewTechnology(e){
    e.preventDefault();//to prevent the pageload in button click
    const currentTechnology = this.state.newTechnology;
    if(currentTechnology.text !==""){
      const technologies = [...this.state.technologies, currentTechnology];
    this.setState({
      technologies: technologies,
      newTechnology:{
        key:'',
        text:'',
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      newTechnology:{
        key: Date.now(),
        text: e.target.value,

      }
    })
  }
  deleteTechnology(key){
    const filteredItems= this.state.technologies.filter(technology =>
      technology.key!==key);
    this.setState({
      technologies: filteredItems
    })

  }
  updateTechnology(key,text){
    const technologies = this.state.technologies;
    technologies.map(technology=>{      
      if(technology.key===key){
        console.log(technology.key +"    "+key)
        technology.text= text;
      }
    })
    this.setState({
      technologies: technologies
    })
  }


 render(){
  return (
    <div className="App">
      <header>
        <h1>Technology list</h1>
        <form id="crud-list-form" onSubmit={this.addNewTechnology}>
          <input type="text" placeholder="Enter new technology" value= {this.state.newTechnology.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.technologies.text}</p>
        
          <Technologylist technologies={this.state.technologies} deleteTechnology={this.deleteTechnology} updateTechnology={this.updateTechnology}/>
        
      </header>
    </div>
  );
 }
}


export default App;