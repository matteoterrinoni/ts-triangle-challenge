import React, { Component } from 'react';
import App from './App';

export class TSApp extends Component {

  componentDidMount(){
    require('@tradeshift/tradeshift-ui/ts.js')
  }

  render(){
      return <App/>
  }
}

export default TSApp