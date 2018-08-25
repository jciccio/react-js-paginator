import React, { Component } from "react";
import "./style.css";


/**
 * Paginator component
 *
 * @version 0.0.1
 * @author [Jose Antonio Ciccio](https://github.com/jciccio)
 */
class Paginator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      maxPagesToDisplay: (this.props.maxPagesToDisplay ? this.props.maxPagesToDisplay: 5)
    };
    //Props:
    // 1. Page size => pageSize
    // 2. Total elements => totalElements
    // 3. onChangeCallback => onPageChangeCallback
    // 4. Style custom
  }

  render() {
    if (this.getTotalPages() > this.state.maxPagesToDisplay){
      return (
        <div className="paginator">
          {this.renderRange()}
        </div>
      );
    }
    else{
      return (
        <div className="paginator">
          {this.renderPages()}
        </div>
      );
    }
  }

  renderPages(){
    let pagesData = [];
    let totalPages = this.getTotalPages();
    for (let i = 1 ; i <= totalPages; i++){
      pagesData.push(this.renderPage(i));
    }
    return pagesData;
  }

  renderRange(){
    let pagesData = [];
    let totalPages = this.getTotalPages();
    let startingPage = this.state.currentPage - parseInt(this.state.maxPagesToDisplay/2) > 0 ? this.state.currentPage - parseInt(this.state.maxPagesToDisplay/2) : 1;
    startingPage = totalPages - startingPage < this.state.maxPagesToDisplay ?
      startingPage - (this.state.maxPagesToDisplay - (totalPages - startingPage)) : startingPage;

    if (startingPage != 1 || this.props.firstArrowAlwaysVisible){
      pagesData.push(this.renderFirst());
    }

    for (let i = startingPage; 
          i < startingPage+this.state.maxPagesToDisplay && 
          i <= totalPages; 
          i++){
      pagesData.push(this.renderPage(i));
    }

    if (startingPage+this.state.maxPagesToDisplay < totalPages || this.props.lastArrowAlwaysVisible){
      pagesData.push(this.renderLast());
    }
    return pagesData;
  }

  getTotalPages(){
    let totalPages = Math.ceil(this.props.totalElements / this.props.pageSize);
    return totalPages;
  }

  renderBox (number, symbol){
    let active = (number == this.state.currentPage) ? "activePage" : "";
    let activeStyle = {}
    if(active.length > 0 && this.props.activePageBoxStyle){
      activeStyle = this.props.activePageBoxStyle;
    }
    return (
      <div style={{...this.props.pageBoxStyle, ...activeStyle}} className={`pageBox ${active}`} key={`page_${number}_${symbol}`}>
        <button style={this.props.pageBoxStyle}
          className={`${active}`}
          style={activeStyle}
          onClick={(e) => {this.changePage(number)}}
        >
          {symbol}
        </button>
      </div>
    ); 
  }

  renderFirst(){
    if (this.getTotalPages() > this.state.maxPagesToDisplay){
      let symbol = "<<";
      if(this.props.firstArrowSymbol)
      {
        symbol = this.props.firstArrowSymbol;
      } 

      return this.renderBox(1, symbol);
    }
    else{
      return null;
    }
  }

  renderLast(){
    let totalPages = this.getTotalPages();
    if (totalPages > this.state.maxPagesToDisplay){
      let symbol = ">>";
      if(this.props.lastArrowSymbol)
      {
        symbol = this.props.lastArrowSymbol;
      } 
      return this.renderBox(totalPages, symbol);
    }
    else{
      return null;
    }
  }

  renderPage(number){
    return this.renderBox(number,number);
  }

  changePage(number){
    this.setState({
      currentPage: number
    });
    this.props.onPageChangeCallback(number);
  }

}

export default Paginator;
