import Avatar from "./components/Avatar/Avatar";
import Intro from "./components/Intro/Intro";
import SkillSet from "./components/SkillSet/SkillSet";


function App() {
  return (
     <div className='container'>
        <Avatar />
        <div className="data">
            <Intro />
            <SkillSet />
        </div>
     </div> 
  );
}

export default App;
