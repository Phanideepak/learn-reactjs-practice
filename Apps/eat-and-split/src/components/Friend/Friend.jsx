import React from 'react'
import Button from '../Button/Button'

const Friend = ({friend, selectedFriend, onSelection}) => {
   
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
       <img src={friend.image} alt={friend.name} />
       <h3>{friend.name}</h3>
       {
          friend.balance < 0 && 
          <p className='red'>
            You owe {friend.name} {Math.abs(friend.balance)}€
          </p>
       }
       {
          friend.balance === 0 && 
          <p>You and {friend.name} are even</p>
       }
       {
          friend.balance > 0 && 
          <p className='green'>{friend.name} owe you {friend.balance}</p>
       }
       <Button onClick={()=>onSelection(friend)}>{selectedFriend?.id === friend.id ? "Close" : "Select"}</Button>
    </li>
   
  )
}

export default Friend