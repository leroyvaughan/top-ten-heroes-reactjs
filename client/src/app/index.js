import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components';
import { HeroesList } from '../pages';
import { HeroesInsert } from '../pages';
import { HeroesUpdate } from '../pages';
import { HeroesDisplay } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/heroes/list" exact component={HeroesList} />
                <Route path="/hero/create" exact component={HeroesInsert} />
                <Route
                    path="/hero/display/:id"
                    exact
                    component={HeroesDisplay} />
                <Route
                    path="/hero/update/:id"
                    exact
                    component={HeroesUpdate}
                />
                <Redirect exact from="/" to="/heroes/list" />
            </Switch>
        </Router>
    )
}


export default App