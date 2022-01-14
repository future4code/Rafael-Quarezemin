import './App.css';
import Card from "./components/Card"
import MatchesCard from "./components/MatchesCard"
import styled from 'styled-components'
import React, {useState, useEffect} from "react"
import axios from "axios"

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
  const [NewProfile, setNewProfile] = useState({})
  const [NewGetMatches, setNewGetMatches] = useState({})

  const goToMatches = () => {
    setWhichCard("matches")
  }

  const goToCard = () => {
    setWhichCard("Card")
  }

  const getProfile = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-quarezemin-joy/person")
    .then((response) => setNewProfile(response.data))
  }

  // const getMatches = () => {
  //   axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-quarezemin-joy/matches")
  //   .then((response) => setNewProfile(response.data))
  // }

  useEffect(() => {
    getProfile()
  }, [])

  // useEffect(() => {
  //   getMatches()
  // }, [])

console.log(NewProfile)

  return (
    <Background> 
      { whichCard==="Card"? <Card 
      photo={NewProfile.profile?.photo}
      name={NewProfile.profile?.name}
      description={NewProfile.profile?.bio} 
      age={NewProfile.profile?.age}
      goToMatches={goToMatches}
      /> : <MatchesCard goToCard={goToCard}/>
      }
        
    <button>Clear All</button>
  </Background>
    
  );
}
export default App;
