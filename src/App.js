import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './containers/Detail';
import Home from './containers/Home';
import Layout from './hocs/Layout';


const App = () => (

    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:id' component={Detail} />
            </Switch>
        </Layout>
    </Router>

);

export default App