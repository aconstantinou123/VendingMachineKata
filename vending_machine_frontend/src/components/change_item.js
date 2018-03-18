import React from 'react'

const ChangeItem = (props) => {

    return <div>{props.name}: ${(props.value/ 100).toFixed(2)}</div>
}

export default ChangeItem;