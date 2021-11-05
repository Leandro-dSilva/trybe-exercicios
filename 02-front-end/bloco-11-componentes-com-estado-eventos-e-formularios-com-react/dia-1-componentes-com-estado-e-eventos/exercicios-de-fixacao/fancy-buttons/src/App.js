import React from 'react'

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
    }));
  }

  render() {
    return(
      <>
        <button
          name="button1clicks" 
          onClick={this.handleClick}>
            {`número de clicks: ${this.state.button1clicks}`}
        </button>
        <button 
          name="button2clicks" 
          onClick={this.handleClick}>
            {`número de clicks: ${this.state.button2clicks}`}
        </button>
        <button 
          name="button3clicks" 
          onClick={this.handleClick}>
            {`número de clicks: ${this.state.button3clicks}`}
        </button>
      </>
    )
  }
}

export default App;
