import React from 'react';
import Main from './components/main/Main';
import Home from './components/homeView/Home';
import CustomTmpl from './components/customContentTmpl/CustomTmpl';
import {Route, IndexRoute} from 'react-router';
import Alert from 'react-s-alert';

const alertClear = () => {
    Alert.closeAll();
};

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} onEnter={alertClear} />
        <Route path="custom" component={CustomTmpl} onEnter={alertClear} />
    </Route>
);
