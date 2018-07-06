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

        <footer>
          <div className='what'>
            <h5>What is this?</h5>
            <p>
            <a href='https://www.scribbletone.com/typefaces/ff-chartwell' target='_blank'>FF Chartwell</a> only supports values from 0-100. This can be a problem if your data has values that do not fit within this range. To get around this, you can <a href='https://en.wikipedia.org/wiki/Normalization_(statistics)' target="_blank">normalize</a> your data. Essentially this scales the data to fit within the acceptable range and preserves the relationships between each value.
            </p>
            <p>
              For example, if you have values of “50+100+200”, you would need to support at least a range of 0-200. If we divide all our values by 2, we’ll end up with values of “25+50+100”. All values now lie within the supported range of 0-100, and still retain the proportional relationship to each other.
            </p>
            <p>
              The above calculator does all the math for you, so you don’t have to figure out the optimum value to divide by. Just set the minimum and maximum possible values, then enter your data string, with values separated by a “+”. The “normalized data” can then be used for Chartwell.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
