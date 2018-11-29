import React, { Component } from 'react';

import Form from '../Form'
import Result from '../Result'

import './App.scss';

export class App extends Component {
  
  constructor(p){
    super(p)
    this.handleChangeSide = this.handleChangeSide.bind(this)
  }

  state = {
    sides: {}
  }

  /**
   * change a side passing a portion
   * of the sides object
   */
  handleChangeSide(keyVal){
    const {sides} = this.state
    this.setState({
      sides: {
        ...sides,
        ...keyVal
      }
    })
  }

  render() {
    const {sides} = this.state
    const {a, b, c} = sides

    return (
      <main data-ts="Main">
        <div data-ts="MainContent">
          <div className="container">
            <h2>What triangle is it?</h2>
            <div className="App">
              <Form sides={sides} onChangeSide={this.handleChangeSide} />
              <Result measures={[a, b, c]}/>
            </div>
          </div>
        </div>
      </main>
    );
  }
}


export default App
