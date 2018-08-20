import React, { Component } from 'react';
import Paginator from 'react-js-paginator';
import './App.css';
import logo from './logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">react-js-pagination Component</h1>
        </header>
        <h1> Current page: {this.state.currentPage} </h1>
        <Paginator
          pageSize={10}
          totalElements={64}
          onPageChangeCallback={(e) => {this.pageChange(e)}}
        />
       
       <Paginator
          pageSize={10}
          totalElements={97}
          onPageChangeCallback={(e) => {this.pageChange(e)}}
        />

        <Paginator
          pageSize={10}
          totalElements={45}
          onPageChangeCallback={(e) => {this.pageChange(e)}}
        />

      </div>
    );
  }

  pageChange(content){
    this.setState({currentPage: content});
  }
}

export default App;
