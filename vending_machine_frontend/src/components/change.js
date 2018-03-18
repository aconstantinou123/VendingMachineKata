import React from 'react';
import ChangeItem from './change_item';

const Change = (props) => {

    const change = props.change.map((coin, index) => {
            if(coin === 100){
              return <ChangeItem key={index} value={coin} name='Dollar'/>
            }
            else if (coin === 25){
                return <ChangeItem key={index} value={coin} name='Quarter'/>
            }
            else if (coin === 10){
                return <ChangeItem key={index} value={coin} name='Nickel'/>
            }
            else if (coin === 5){
                return <ChangeItem key={index} value={coin} name='Dime'/>
            }
            return change; 
        }
    )
    return (
        <div>
            <h3>Change</h3>
            <div>{change}</div>
        </div>
    )
}

export default Change;