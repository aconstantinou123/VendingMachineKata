import React, { Component } from 'react';

class FloatMoneyItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfCoins: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        console.log(this.state.numberOfCoins)
        this.props.addMoney(parseInt(this.props.value, 10), this.state.numberOfCoins)
    }

    handleChange(event) {
        this.setState({
            numberOfCoins: event.target.value
        })
    }

    render(){
     return (
     <form onSubmit={this.handleClick}>
        <label>
            {this.props.name} 
            <input type="text" onChange={this.handleChange}/>
        </label>
            <input type="submit" value="Submit"/>
        </form>
        )
    }
}

export default FloatMoneyItem;