import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VendingMachine from './containers/vending_maching';

class App extends Component {
    render(){
        return <VendingMachine/>
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));
