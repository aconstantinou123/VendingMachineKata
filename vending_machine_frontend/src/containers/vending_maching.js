import React, { Component } from 'react';
import Items from '../components/items';
import Money from '../components/money';
import Change from '../components/change';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import NewItem from '../components/new_item';
import FloatMoney from '../components/float_money';


class VendingMachine extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            boughtItem: null,
            moneyInserted: 0,
            coinsInserted: [],
            totalCoins: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 10, 10, 10, 10, 10, 10,
            10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            coinsChange:[],
            totalChange: 0
        }
        this.handleMoneyAdded = this.handleMoneyAdded.bind(this)
        this.handleItemSelected = this.handleItemSelected.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleReturnMoney = this.handleReturnMoney.bind(this)
        this.getRequest = this.getRequest.bind(this)
        this.handleFloatMoneyAdded = this.handleFloatMoneyAdded.bind(this)
    };

    handleFloatMoneyAdded(moneyToAdd, numberOfCoins){
        console.log(`${moneyToAdd}: ${numberOfCoins}`)
        const coins =[];
        for(let i = 0; i < numberOfCoins; i++){
            coins.push(moneyToAdd);
        }
        console.log(coins)
        this.setState({
            totalCoins: this.state.totalCoins.concat(coins).sort(function(a, b){return b-a;})
        })
        console.log(this.state.totalCoins);
    }

    handleReturnMoney(){
        this.setState({
            totalChange: this.state.moneyInserted,
            moneyInserted: 0,
            coinsChange: this.state.coinsInserted,
            coinsInserted: []
        })
    }

    handleMoneyAdded(moneyToAdd, name){
        const coin = [moneyToAdd]
        this.setState({
            moneyInserted: this.state.moneyInserted + (moneyToAdd / 100),
            coinsInserted: this.state.coinsInserted.concat(coin).sort(function(a, b){return b-a;})
        })
        console.log(this.state.coinsInserted);
    }

    handleItemSelected(priceOfItem, item){
        if(this.state.moneyInserted >= (priceOfItem / 100)){
        this.setState({
            moneyInserted: this.state.moneyInserted - (priceOfItem / 100),
            boughtItem: item.name
            }, 
            function(){
            this.handleChange(this.state.moneyInserted * 100)
        })
            return true;
        }
        else {
            return false;
        }
    }

    handleChange(change){
        var changeToReturn = [];
        this.setState({
            totalCoins: this.state.totalCoins.concat(this.state.coinsInserted).sort(function(a, b){return b-a;})
        })
        for(let i = 0; i < this.state.totalCoins.length; i++){
            if(change >= this.state.totalCoins[i]){
                change -= this.state.totalCoins[i]
                changeToReturn.push(this.state.totalCoins[i])
            }
        }
        this.setState({
            moneyInserted: 0,
            totalChange: change,
            coinsChange: changeToReturn,
            coinsInserted: []
        })
    }

    getRequest(){
        const url = 'http://localhost:4567/items';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
            if(xhr.status !== 200) return;
            var jsonString = xhr.responseText;
            var data = JSON.parse(jsonString);
            this.setState({
                items: data
            })
        })
        xhr.send();
    }


    componentDidMount() {
       this.getRequest();
    }

    componentDidUpdate(){
        this.getRequest();
    }

    render(){
        return(
            <BrowserRouter>
            <div>
                <header>
                    <NavLink to='/'>Vending Machine</NavLink>
                    <br/>
                    <NavLink to='/service'>Service</NavLink>
                    <hr/>
                </header>
                <Switch>
                    <Route exact path='/'>
                        <div>
                            <h1>Lacey's Vending Machine</h1>
                            <hr/>
                            <h3>Money inserted: ${this.state.moneyInserted.toFixed(2)}</h3>
                            <Money items={this.state.items} insertMoney={this.handleMoneyAdded}/>
                            <button onClick={this.handleReturnMoney}>Return Coins</button>
                            <hr/>
                            <Items items={this.state.items} buyProduct={this.handleItemSelected}/>
                            <h3>Bought Item: {this.state.boughtItem}</h3>
                            <Change change={this.state.coinsChange}/>
                        </div>
                    </Route>
                    <Route path='/service'>
                        <div>
                            <NewItem items ={this.state.items} getRequest={this.getRequest}/>
                            <FloatMoney addMoney={this.handleFloatMoneyAdded}/>
                        </div>
                    </Route>
                </Switch>
            </div>
            </BrowserRouter>

        )
          
    }   

}

export default VendingMachine;