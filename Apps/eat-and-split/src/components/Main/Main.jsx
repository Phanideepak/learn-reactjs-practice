import React from 'react'
import Friends from '../Friends/Friends';
import Button from '../Button/Button';
import { useState } from 'react';
import AddFriendForm from '../AddFriendForm/AddFriendForm';
import SplitBillForm from '../SplitBillForm/SplitBillForm';

const initial_friends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
];

const Main = () => {
  const [friends, setFriends] = useState(initial_friends)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleSelection(friend){
     setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend))
     setShowAddFriend(false)
  }

  function handleShowAddFriend(){
      setShowAddFriend(!showAddFriend)
  }

  function handleAddFriend(friend){
     setFriends([...friends, friend])
  }

  function handleSplitBill(value){
     setFriends((friends) => 
        friends.map((friend) => friend.id === selectedFriend.id  ? {...friend, balance : friend.balance + value} : friend)
     )

     setSelectedFriend(null)
  }
  

  return (
    <div className='container'>
        <div className='sidebar'>
            <Friends friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />
            {
              showAddFriend && <AddFriendForm onAddFriend={handleAddFriend}/>
            }
            <Button onClick={handleShowAddFriend}>
                 {showAddFriend ?  'Close' : 'Add Friend'}
            </Button>
        </div>

        {
          selectedFriend && 
          <SplitBillForm
            selectedFriend={selectedFriend}
            key={selectedFriend.id}
            onSplitBill={handleSplitBill}
          />
        }
      
    </div>
  )
}

export default Main