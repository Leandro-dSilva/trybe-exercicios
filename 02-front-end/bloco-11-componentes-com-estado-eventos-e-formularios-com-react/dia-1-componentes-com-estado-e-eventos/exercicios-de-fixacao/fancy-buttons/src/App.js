import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      button1clicks: 0,
      button2clicks: 0,
      button3clicks: 0
    }
  }
  
  handleClick({ target: { name } }) {
    this.setState((before, _props) => ({
      [name]: before[name] + 1
    }), () => {
      const numberOfClicks = this.state[name];

      if (numberOfClicks % 2 === 0) {
        console.log(name, 'is green');
      } else {
        console.log(name, 'not is green');
      }
    });
  }

  render() {
    const { button1clicks, button2clicks, button3clicks } = this.state;
    return(
      <>
        <button
          name="button1clicks"
          className={ (button1clicks > 0 && button1clicks % 2 === 0) ? 'even' : null }
          onClick={this.handleClick}>
            {`número de clicks: ${button1clicks}`}
        </button>
        <button
          name="button2clicks"
          className={ (button2clicks > 0 && button2clicks % 2 === 0) ? 'even' : null }
          onClick={this.handleClick}>
            {`número de clicks: ${button2clicks}`}
        </button>
        <button
          name="button3clicks"
          className={ (button3clicks > 0 && button3clicks % 2 === 0) ? 'even' : null }
          onClick={this.handleClick}>
            {`número de clicks: ${button3clicks}`}
        </button>
      </>
    )
  }
}

export default App;
