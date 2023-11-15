import './App.css';
import CountDown from './Components/CountDown/CountDown';
import SocialMedia from './Components/SocialMedia/SocialMedia';

function App() {
  return (
    <div className=" min-h-[100svh] grid grid-rows-[70%,_1fr]">
      <CountDown />
      <SocialMedia />
    </div>
    
  );
}

export default App;
