import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import News from './pages/noticias';
import Ecomerce from './pages/ecomerce';




export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/news' exact component={News} />
                <Route path='/ecomerce' exact component={Ecomerce} />
            </Switch>
        </BrowserRouter>
    );
}