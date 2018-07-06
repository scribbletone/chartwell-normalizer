import React, { Component } from 'react';
import '../Styles/App.css';
import Normalizer from './Normalizer/Normalizer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>FF Chartwell Data Normalizer</h1>
        </header>
        <main>
          <Normalizer />
        </main>
      </div>
    );
  }
}

export default App;
