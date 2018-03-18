import React from 'react';

const MoneyItem = (props) => {
    
    function handleClick() {
        props.insertMoney(parseInt(props.value, 10), props.name);
    }

     return <button onClick={handleClick}>{props.name}</button>
    
}

export default MoneyItem;