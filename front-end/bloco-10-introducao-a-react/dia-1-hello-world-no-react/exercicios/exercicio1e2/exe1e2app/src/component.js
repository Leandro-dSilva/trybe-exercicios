import React from "react";

class Tasksli extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <ol>
        {data.map(({comp}) => {
          return(
            <li className="Tasksli">{comp}</li>
          )})}
      </ol>
    )
  }
}

export default Tasksli;
