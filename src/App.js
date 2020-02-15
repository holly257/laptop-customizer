import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Options from './Options/Options'
import Cart from './Cart/Cart'

class App extends Component {
  // sets state of cart
  // state stays here
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  // updates cart
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Options updateFeature={this.updateFeature} selected={this.state.selected} features={this.props.features} currencyFormat={this.USCurrencyFormat}/>
          <Cart selected={this.state.selected} currencyFormat={this.USCurrencyFormat}/>
        </main>
      </div>
    );
  }
}

export default App;
