import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
      id: Date.now(),
      texto: 'Texto da primeira tarefa',
      completa: false
    }, {
      id: Date.now(),
      texto: 'Texto da segunda tarefa',
      completa: true
    }],

    inputValue: '',

    filtro: '',

    listaDeTarefas: []



  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.texto !== this.state.texto) {
      localStorage.setItem('texto', this.state.texto)
    }

  };

  componentDidMount() {
    this.pegarTarefas()
    const textoLS = localStorage.getItem('texto') || ''

    this.setState({ texto: textoLS })
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false

    }
    const novaListaDeTarefa = [... this.state.tarefas, novaTarefa]

    // 1-Salvando no localStorage
    localStorage.setItem('históricoTarefas', JSON.stringify(novaListaDeTarefa))

    this.setState({ tarefas: novaListaDeTarefa })
    this.setState({ inputValue: '' })
  }

  selectTarefa = (id) => {
    const novaListaDeTarefa = this.state.tarefas.map((post) => {
      if (id === post.id) {
        const novaTarefa = {
          ...post,
          completa: !post.completa
        }
        return novaTarefa
      } else {
        return post
      }
    })
    this.setState({ tarefas: novaListaDeTarefa })
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  guardarTarefas = () => {

  }

  pegarTarefas = () => {
    const tarefasSalvasLS = JSON.parse(localStorage.getItem('historicoTarefas')) || []
    this.setState({ listaDeTarefas: tarefasSalvasLS })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input
            value={this.state.inputValue}
            onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
