import React from 'react'

const FlashCard = ({question, selectedElement, toggleCard}) => {
  return (
    <div className={selectedElement === question.id ? 'card reveal' : 'card'} onClick={()=>toggleCard(question.id)}>
        {selectedElement === question.id ? (question.answer) : (question.question)}
    </div>
  )
}

export default FlashCard