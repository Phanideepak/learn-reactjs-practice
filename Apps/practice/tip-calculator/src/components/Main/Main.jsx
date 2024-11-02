import React, { useState } from 'react'

const Main = () => {
  const [sum, setSum] = useState(0)
  const [tip1, setTip1] = useState(0)
  const [tip2, setTip2] = useState(0)
  
  function onReset(){
      setSum(0)
      setTip1(0)
      setTip2(0)
  }

  return (
    <div className='main'>
        <div>
            <label>How much was the bill ? </label>
            <input type='number' value={sum} onChange={(e)=> setSum(Number(e.target.value))} />
        </div>

        <div>
            <label>How did you like the service</label>
            <select value={tip1} onChange={(e)=>setTip1(Number(e.target.value))}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolute amazing! (20%)</option>
            </select>
        </div>

        <div>
            <label>How did your friend like the service? </label>
            <select value={tip2} onChange={(e)=>setTip2(Number(e.target.value))}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolute amazing! (20%)</option>
            </select>
        </div>

        <div>
            {
                ((sum + (tip1 + tip2)*sum/200) !== 0) && (
                <>
                    <h3>You pay ${sum + (tip1 + tip2) * sum / 200} (${sum} + {(tip1 + tip2) * sum / 200} tip)</h3>
                    <button onClick={onReset}>reset</button>
                </>
              ) 
            }     
        </div>
    </div>

  )
}

export default Main