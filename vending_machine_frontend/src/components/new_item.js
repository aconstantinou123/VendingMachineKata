import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NewItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            quantity: '',
            price: '',
            selector: '',
            fireRedirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        if(event.target.id === "name"){
            this.setState({
                name: event.target.value
            })
        }
        else if (event.target.id === "quantity"){
            this.setState({
                quantity: event.target.value
            })
        }
        else if (event.target.id === "price"){
            this.setState({
                price: event.target.value
            })
        }
        else if (event.target.id === "selector"){
            this.setState({
                selector: event.target.value
            })
        }
    }


    handleSubmit(event){
        console.log(this.props.items.length);
        event.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:4567/items');
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('load', function(){
            if(this.status !== 201) return;
        });
        var body = {
            id: this.props.items.length + 1,
            name: this.state.name,
            quantity: this.state.quantity,
            price: this.state.price,
            selector: this.state.selector
        }
        console.log(JSON.stringify(body))
        request.send(JSON.stringify(body));
        this.setState({fireRedirect: true})
    }

    render() {
        const { from } =  '/service';
        const { fireRedirect } = this.state;
    return (
        <div>
            <h2>Add New Item</h2>
        <form onSubmit={this.handleSubmit}>
            <label>
                Name of Item: 
                <input id="name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                Quantity: 
                <input id="quantity" type="text" value={this.state.quantity} onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                Price: $
                <input id="price" type="text" value={this.state.price} onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                Selector:
                <input id="selector" type="text" value={this.state.selector} onChange={this.handleChange}/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
            {fireRedirect && (
                <Redirect to={from || '/'}/>
            )}
        </div>
     )
    }
}

export default NewItem;