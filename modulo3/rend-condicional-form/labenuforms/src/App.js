import React from 'react';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import './App.css';
import styled from 'styled-components'

const Centralized = styled.div`
  text-align: center;
`

class App extends React.Component {

  state = {
    count: 1,
  }

  add () {
    this.setState({ count: this.state.count + 1 })
  }

  renderizaEtapa = () => {
    switch (this.state.count) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
   
  }
  render() {
    return (
      <Centralized>
    
        {this.renderizaEtapa()}
        <button onClick={this.add}>Próxima etapa</button>
        

      </Centralized>
    );
  }
}

export default App;
