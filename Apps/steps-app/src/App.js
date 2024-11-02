import Steps from "./components/Steps/Steps";
import StepMessage from "./components/StepMessage/StepMessage";


function App() {
  return (
     <div>
       <Steps /> 
       <StepMessage step={1}>
          <p>Pass in content</p>
          <p>✌️</p>
        </StepMessage>

        <StepMessage step={2}>
          <p>Read children prop</p>
          <p>😎</p>
        </StepMessage>
     </div>
  );
}

export default App;
