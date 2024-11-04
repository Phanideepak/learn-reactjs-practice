import React from 'react'
import FlashCard from '../FlashCard/FlashCard'
import { useState } from 'react'

const FlashCards = () => {
  
  const [selectedElement, setSelectedElement] = useState(-1)

  function toggleCard(id){
     setSelectedElement(selectedElement === id ? -1 : id)
  }

  const questions = [{id : 1, question : 'What is Reactjs?', answer: 'Front end framework'},
     {id : 2, question : 'What is Python?', answer: 'Python Programming language'},
     {id : 3, question : 'What is swap case function in python?', answer: 'Swapcase is a string function that converts all upper case characters into lowercase and vice versa.'},
     {id : 4, question : 'How do you handle cookies in Flask?', answer: 'There should be a set_cookies method to store the JWT token when the user logs in.'},
     {id : 5, question : 'Which extension is used in a flask to connect to DB?', answer: 'Flask SQL alchemy plugin used to connect the Flask application to MySQL databases'},
     {id : 6, question : 'What is flask bcrypt?', answer: 'It is a flask extension that provides password hashing and verification functionality. '},
     {id : 7, question : 'How long can an identifier be in Flask Python?', answer: 'There is no limit on the length of the identifier in Python. Identifiers should not be keywords. '},
     {id : 8, question : 'What HTTP methods does Flask provide?', answer: 'GET, PUT, POST, DELETE, PATCH'}]  

  return (
     <div className='card-list'>
        {
            questions.map(question => (<FlashCard key={question.id} question={question} selectedElement={selectedElement} toggleCard={toggleCard} />))
        }
     </div>
  )
}

export default FlashCards