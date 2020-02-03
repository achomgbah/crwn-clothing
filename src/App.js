import React from 'react';
import './App.css';
import './pages/homepage.styles.scss'
import Homepage from "./pages/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Homepage}/>
                <Route exact path={'/shop'} component={ShopPage}/>
                <Route exact path={'/signin'} component={SignInAndSignUp}/>
            </Switch>
        </div>
    );
}

export default App;
