import './App.css';
import Card from "./components/Card"
import MatchesCard from "./components/MatchesCard"
import styled from 'styled-components'
import React, {useState} from "react"

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dac7ca;
  display: flex;
  justify-content: center;
  align-items: center;

`

function App() {

  const [whichCard, setWhichCard] = useState("Card")

  const goToMatches = () => {
    setWhichCard("matches")
  }

  const goToCard = () => {
    setWhichCard("Card")
  }

  return (
    <Background> 
      { whichCard==="Card"? <Card 
      name='Ribamar' 
      description='Cachorrinho-bonitinho' 
      age="30"
      goToMatches={goToMatches}
      /> : <MatchesCard goToCard={goToCard}/>
      }
        
    <button>Clear All</button>
  </Background>
    
  );
}
export default App;
