import React from 'react';

class App extends React.Component {
  constructor(props) { // props é opcional
    super()
    this.handleClick = this.handleClick.bind(this);
    // console.log(props);

    this.state = {
      numeroDeCliques: 0,
    }
  }

  handleClick() {
    // console.log(this);
    // console.log('Clicou no botão!')

    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    // console.log(this);
    return(
      <button onClick={this.handleClick}>
        {this.state.numeroDeCliques}
      </button>
    )
  }
}

export default App;
