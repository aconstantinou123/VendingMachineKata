import React from 'react';
import FloatMoneyItem from './float_money_item';

const FloatMoney = (props) => {

     return (
         <div>
            <h3>Add Coins to Vending Machine</h3>
            <FloatMoneyItem name="Dollar" value="100" addMoney={props.addMoney}/>
            <FloatMoneyItem name="Quarter" value="25" addMoney={props.addMoney}/>
            <FloatMoneyItem name="Dime" value="10" addMoney={props.addMoney}/>
            <FloatMoneyItem name="Nickel" value="5" addMoney={props.addMoney}/>
        </div>
     )
    
}

export default FloatMoney;