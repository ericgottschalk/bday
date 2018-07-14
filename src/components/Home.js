import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
      return (
        <div styles="text-align:center">
          <h3>Tente passar um nome na URL... :D</h3>
          <p>Exemplo:  <Link to='/felisberto'>https://bday.ericgottschalk.net/felisberto</Link></p>
        </div>
    );
  }
}

export default Home;
