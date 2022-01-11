
import './App.css';
import Card from "./components/Card"
import MatchesCard from "./components/MatchesCard"
import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dac7ca;
  display: flex;
  justify-content: center;
  align-items: center;

`


function App() {
  return (
    <Background>
      <Card name='Ribamar' description='Cachorrinho-bonitinho' age="30" />
      
      <MatchesCard />
      <button>Clear All</button>
    </Background>
    
  );
}

export default App;
