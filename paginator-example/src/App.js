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
      <div className="App" style={{paddingLeft:20, paddingRight:20}}>
        <header className="App-header">
          <h1 className="App-title">react-js-pagination Component</h1>
        </header>
        <h1> Current page: {this.state.currentPage} </h1>
        
       <p style={{textAlign:'left'}}>Out of the box: </p>
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

        <p style={{textAlign:'left'}}>Paginator with maxPagesToDisplay:</p>
        <Paginator
          pageSize={5}
          totalElements={71}
          maxPagesToDisplay={10}
          onPageChangeCallback={(e) => {this.pageChange(e)}}
        />

        <p style={{textAlign:'left'}}>Paginator with maxPagesToDisplay and style: </p>
        <Paginator
          pageSize={5}
          totalElements={71}
          maxPagesToDisplay={10}
          onPageChangeCallback={(e) => {this.pageChange(e)}}
          pageBoxStyle={{border: 0, color: 'green', padding: 3, fontSize: 16}}
        />

        <p style={{textAlign:'left'}}>Paginator with maxPagesToDisplay and pagebox and active style: </p>
        <Paginator
          pageSize={5}
          totalElements={71}
          maxPagesToDisplay={10}
          onPageChangeCallback={(e) => {this.pageChange(e)}}
          pageBoxStyle={{border: 0, color: 'black', padding: 3, fontSize: 16}}
          activePageBoxStyle={{fontWeight: 'bolder', color: 'green'}}
        />

      </div>
    );
  }

  pageChange(content){
    this.setState({currentPage: content});
  }
}

export default App;
