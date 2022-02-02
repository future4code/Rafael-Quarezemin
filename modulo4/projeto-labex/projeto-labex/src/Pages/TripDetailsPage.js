import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

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
const Footer = styled.div`
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
`

function TripDetailsPage() {

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

                <h2>Viagem da Labenu</h2>
                <p>Nome: </p>
                <p>Descrição: </p>
                <p>Planeta: </p>
                <p>Duração: </p>
                <p>Data: </p>
                <Botaopadrao onClick={goBack}>Voltar</Botaopadrao>
                <h2>Candidatos Pendentes</h2>
                <h2>Candidatos Aprovados</h2>


            </Main>

            <Footer>
                <p>Todos os direitos reservados ®</p>
            </Footer>
        </div>

    )
}

export default TripDetailsPage