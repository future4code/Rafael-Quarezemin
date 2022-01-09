import './App.css';
import Card from "./components/Card"
import styled from 'styled-components'

const Background = styled.div`
  display: grid;
  align-items: center;
  align-self: center;
  background-color: #dac7ca;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <Background>
      <Card name='Ribamar' description='Cachorrinho-bonitinho' age="30" />
    </Background>
  );
}

export default App;
