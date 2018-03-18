import React from 'react';

const Item = (props) => {

        function handleClick(){
            var price = parseInt(props.item.price * 100, 10);
            if(props.item.quantity === 0){
                props.item.quantity = "Out of Stock"
             }
            else if(props.item.quantity === "Out of Stock"){
                return
            }
            else if(props.buyProduct(price, props.item) === true && props.item.quantity !== "Out of Stock"){
                props.item.quantity--;
                updateInventory(props.item);
            }
          
        }

        function updateInventory(item){
            const request = new XMLHttpRequest();
            request.open('PUT', 'http://localhost:4567/items/' + item.id);
            request.setRequestHeader('Content-Type', 'application/json');
            request.addEventListener('load', function(){
                if(this.status !== 201) return;
            });
            var body = {
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                selector: item.selector
            }
            console.log(JSON.stringify(body))
            request.send(JSON.stringify(body));
        }

        return (
            <div>
                <h2>Name: {props.item.name}</h2>
                <h3>Quanity: {props.item.quantity}</h3>
                <h3>Price: ${props.item.price.toFixed(2)}</h3>
                <button className="select_item" onClick={handleClick}>{props.item.selector}</button>
                <hr/>
            </div>
        ) 
}

export default Item;