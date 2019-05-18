import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tabs.js';
import Bar from './components/Bar/Bar.js';

class App extends Component {

  state = {
    data: [],
    isLoading: false,
    tabs: ['Republican', 'Democrat', 'Other','All'],
    Party: '',
  }

  componentDidMount(){
    this.doFetch()
  }

  setCurrentTab = (tabName) => {
    this.setState({
      Party: tabName,
    });
  }

  setCurrentTab2 = (tabName) => {
    this.setState({
      currentTab2: tabName,
    });
  }

  dataFor(party){
    if (this.state.Party === 'All') {
      return this.state.data
    } else {
      return this.state.data.filter(function(item){
        return item.Party === party
      })
    }
  }

  doFetch(){
    console.log('Hitting refresh');
    this.setState({
      isLoading: true,
    });
    fetch("./floridadata.json")
      .then(data => {
        return data.json()}) 
      .then(data => {
        console.log("Got the data!", data);

      this.setState({
        data: data,

      });
    });

  }

  render(){
    return (
      <div className="Container">
        <div className="Container-img">
          <Tabs
            tabs={this.state.tabs}
            currentTab={this.state.Party}
            onChange={this.setCurrentTab.bind(this)} />
        </div>
        <div className="Container-title">
          <h1> Florida Voter Registration 1972-2016</h1>
        </div>
        <div className="Container-graph">
          {this.dataFor(this.state.Party).map(function(entry){
          return(<Bar Party={entry.Party}  Number={entry.Number} />)
          })}
        </div>
      </div>    
    );
  }
}

export default App;

