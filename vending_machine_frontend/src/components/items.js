import React, { Component } from 'react';
import Item from './item';

class Items extends Component{

    render(){
        const items = this.props.items.map((item, index) =>{
            return(
                <Item key={index}
                    item={item}
                    buyProduct={this.props.buyProduct}/>
            )
        });
        return <div>{items}</div>
    }
}

export default Items;