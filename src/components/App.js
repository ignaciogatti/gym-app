import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import ClientCreate from './clients/ClientCreate';
import ClientDelete from './clients/ClientDelete';
import ClientList from './clients/ClientList';
import ClientShow from './clients/ClientShow';
import Header from './Header';
import history from '../history';
import ClientPay from './clients/ClientPay';
import ClientDetails from './clients/ClientDetails';

class App extends React.Component{

    render(){
        return(
            <div>
                <Router history={history} >
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ClientList} />
                        <Route path="/news" exact component={ClientCreate} />
                        <Route path="/edit" exact component={ClientDetails} />
                        <Route path="/delete/:id" exact component={ClientDelete} />
                        <Route path="/search" exact component={ClientShow} />
                        <Route path="/pay" exact component={ClientPay} />
                    </Switch>
                </div>
                </Router>
            </div>
        );
    }
}

export default App;