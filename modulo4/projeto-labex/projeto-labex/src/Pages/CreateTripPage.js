import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Header = styled.div`
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
    height: 15vh;
`
const Botaopadrao = styled.button`
    background-color: grey;
    border-radius: 5px;
    height: 40px;
    width: 100px;
    color: white;
`
const Main = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    padding-left: 20px;
    height: 70vh;
`
const ContainerBotoes = styled.div`
    display: flex;
    grid-gap: 5vw;
`
const Footer = styled.div`
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
`

function CreateTripPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <Header>
                <h1>LabeX Viagens</h1>
            </Header>

            <Main>
                <h2>Criar Viagem</h2>
                <form>
                    <fieldset>
                        <label>Nome: </label><input class="campo_nome" type="text" /><br />
                        <label>Escolha um planeta: </label><input class="campo_nome" type="text" /><br />
                        <label>Data: </label><input class="campo_nome" type="text" /><br />
                        <label>Descrição: </label><input class="campo_nome" type="text" /><br />
                        <label>Duração em dias: </label><input class="campo_nome" type="text" /><br />
                    </fieldset>
                    <br /><br />
                </form>
                <ContainerBotoes>
                    <Botaopadrao onClick={goBack}>Voltar</Botaopadrao>
                    <Botaopadrao>Criar</Botaopadrao>
                </ContainerBotoes>
            </Main>

            <Footer>
                <p>Todos os direitos reservados ®</p>
            </Footer>
        </div>

    )
}

export default CreateTripPage