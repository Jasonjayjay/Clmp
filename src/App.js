import './App.css';
import Home from './Components/main/a-home/Main';
import Logo from './Components/main/b-home/Logo';
import Section3 from './Components/main/c-what_is_clmp/Section3';
import Section4 from './Components/main/d-what_we_can_do/Section4';
import Section6 from './Components/main/f-pricing/Section6';
import Section7 from './Components/main/g-questions/Section7';
import Section8 from './Components/main/h-footer1/Section8';
import Section9 from './Components/main/i-footer2/Section9';
function App() {
  return (
    <div className="App">
      <Home/>
      <Logo/>
      <Section3/> 
      <Section4/> 
      <Section6/> 
      <Section7/> 
      <Section8/> 
      <Section9/>    
    </div>
  );
}

export default App;
