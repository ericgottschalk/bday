import React, { Component } from 'react';
import './cake.css';
import './app.css';

class Cake extends Component {
  render() {
    const cake = (
      <div className="bolo">
        <div className="vela"></div>
        <div className="fogo"></div>
        <div className="sombra"></div>
      </div>
    );
    
    const footer = (
      <div className="footer">
        <h1 className="centerd">Feliz aniversário, {this.props.match.params.name}</h1>
      </div>
    );

    return (
      <div>
        {cake}
        {footer}
      </div> 
    );
  }
}

export default Cake;