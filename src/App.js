import React, { Component } from 'react';
import './App.css';
import ProductList from './Products/ProductList';
import Search from './Products/Search';
import ProductDetails from './Products/ProductDetails';
import AddCart from './Products/AddCart';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
      searchQuery: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleClick(data) {
    console.log(data);
    let presentState = this.state;
    //PresentState=PresentState.counter+1;
    presentState.counter++
    this.setState(presentState);

  };
  handleSearch(data) {
    console.log(data);
    let currentState = this.state;
    currentState.searchQuery = data;
    this.setState(currentState);


  }
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-md-12">
            <br />
            <h3 className="title">Bhilwara Infotechnology Ltd</h3>

            <Search search={this.handleClick}
              searchText={this.handleSearch} />
            <br></br>

            <ProductList search={this.state.searchQuery} />

          </div>



        </div>
      </div>

    );
  }
}

export default App;
