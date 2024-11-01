import { useState } from "react";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)
  let currDate = new Date()
  currDate.setDate(currDate.getDate() + count)

  function minus(){
     setCount((count)=> count - 1)
  } 

  function add(){
    setCount((count)=> count + 1)
  } 

  return (
    <div className="container">
      <Header />

      <div className="row">
         
         <button onClick={minus}>-</button>
          
          <p>Count : {count}</p>
          
         <button onClick={add}>+</button> 
          
      </div>

      <div className="row">
          {
            count !== 0 && (
                <p>{count} day from today is {currDate.toDateString()}</p>
            )
          }
          {
            count === 0 && (
                <p>Today is {currDate.toDateString()}</p>
            )
          }
      </div> 

      <Footer />

    </div>
     
  );
}

export default App;
