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
import ClientBirthday from './clients/ClientBirthday';
import PlanCreate from './plans/PlanCreate';
import PlanList from './plans/PlanList';
import PlanEdit from './plans/PlanEdit';
import GoogleAuth from './LogIn';
import PrivateRoute from './routers/PrivateRouter';
import PaymentsSearch from './payments/PaymentsSearch';

class App extends React.Component{

    render(){
        return(
            <div>
                <Router history={history} >
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={GoogleAuth} />
                        <PrivateRoute path="/clientlist" exact component={ClientList} />
                        <PrivateRoute path="/news" exact component={ClientCreate} />
                        <PrivateRoute path="/edit" exact component={ClientDetails} />
                        <PrivateRoute path="/delete/:id" exact component={ClientDelete} />
                        <PrivateRoute path="/search" exact component={ClientShow} />
                        <PrivateRoute path="/pay" exact component={ClientPay} />
                        <PrivateRoute path="/birthday" exact component={ClientBirthday} />
                        <PrivateRoute path="/plannews" exact component={PlanCreate} />
                        <PrivateRoute path="/planlist" exact component={PlanList} />
                        <PrivateRoute path="/planedit" exact component={PlanEdit} />
                        <PrivateRoute path="/payments" exact component={PaymentsSearch} />
                    </Switch>
                </div>
                </Router>
            </div>
        );
    }
}

export default App;