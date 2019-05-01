import React from 'react';
import SearchBar from './SearchBar';
import Axios from 'axios';
import './App.css';

class App extends React.Component {

  state = { quote: '',
            author: '',
            isLoaded: false,
            bgColor: '#f99192',
            clickCount: 0,
            userSearch: '' }
  
  onTermSubmit = term => {
    this.setState( {
      userSearch: term
    });
    this.searchArray();
    this.changeColor();
  };

   searchArray = async userSearch => {
   
    const {data} = await Axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const array = data.quotes;
    var filteredArray = [];
    const search = (object,search) => {
      for ( let i=0; i< object.length ; i++) {
        if (object[i].quote.indexOf(search)!==-1) {
          filteredArray.push(object[i]);
        }
      }
      if(filteredArray.length > 0) {
        return (filteredArray[0].quote);
      }
      else {
        return ('sorry no wisdom for you today')
      }
    }
    const searchQuote = search(array, this.state.userSearch );
    this.setState ({
      quote: searchQuote 
    })
  }

  changeColor = () => {
    const color = ['#385a7c', '#f97171', '#f99192', '#8ad6cc', '#b2eee6'];
    let i = this.state.clickCount;

    this.setState({
      clickCount: this.state.clickCount+1,
    });

    if(i<4) {
      this.setState({
        bgColor: color[i],
      });
    } else if(i>=4) {
      this.setState({
        bgColor: color[i],
        clickCount: 0,
      });
    } else if (i===0) {
      this.setState({
        clickCount: this.state.clickCount+1,
        bgColor: color[i],
      });
    }
  }

  render() {
    return (
        <div className="ui container">
          <div id="main">
          <style>
          {`
          :root {
            --main-bg-color: ${this.state.bgColor};
            --main-txt-color: ${this.state.bgColor};
            }
          `}
        </style>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <p id="title">{this.state.quote}</p>
          </div>
      </div>
    )
  }
}

export default App;
