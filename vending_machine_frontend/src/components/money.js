import React from 'react';
import MoneyItem from './money_item';

const Money = (props) => {

     return (
         <div>
            <h3>Coins</h3>
            <MoneyItem name="Dollar" value="100" insertMoney={props.insertMoney}/>
            <MoneyItem name="Quarter" value="25" insertMoney={props.insertMoney}/>
            <MoneyItem name="Dime" value="10" insertMoney={props.insertMoney}/>
            <MoneyItem name="Nickel" value="5" insertMoney={props.insertMoney}/>

        </div>
     )
    
}

export default Money;