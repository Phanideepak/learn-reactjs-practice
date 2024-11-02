import React from 'react'
import Friend from '../Friend/Friend';



const Friends = ({friends, selectedFriend, onSelection}) => {
  return (
    <ul>
        {
            friends.map(friend => (<Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelection={onSelection} />))
        }
    </ul>
  )
}

export default Friends