import React from 'react'

const Question = ({question, index, selectedElement, selectQuestion}) => {
   
  return (
    <div className={selectedElement === question.id ? 'question border-top':'question'} onClick={()=> selectQuestion(question.id)}>
        <p className={selectedElement === question.id ? 'active':''}>{(index+1).toString().padStart(2,0)}</p>
        <div>
           <p className={selectedElement === question.id? 'active':''}>{question.question}</p>
           {
             selectedElement === question.id && <p>{question.answer}</p> 
           }
        </div>
        {
          selectedElement === question.id ? (<p>-</p>) : (<p>+</p>)
        }
    </div>
  )
}

export default Question