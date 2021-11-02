import React from "react";
import './Component.css'

class Namedescription extends React.Component {
  render() {
    const { name, description } = this.props.data[0];

    return(
      <section className="Namecontainer">
        <h1 className="NameH1">{ name }</h1>
        <p>{ description }</p>
      </section>
    )
  }
}

export default Namedescription;
