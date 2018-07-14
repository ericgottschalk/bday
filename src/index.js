import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/Home';
import Cake from './components/Cake';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/:name' component={Cake} />
                <Route component={Home} />
              </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
