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
    justify-content: space-evenly;
    padding-right: 20px;
    padding-left: 20px;
    height: 70vh;
`
const ContainerBotoes = styled.div`
    display: flex;
    grid-gap: 5vw;
`
const ContainerTrip = styled.div`
    border-radius:10px;
    border: 2px solid black;
    padding: 10px;
    width: 16vw;
    height: 18vh;
    background-color: white;
    text-align: center;
`
const ContainerAllTrips = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1vw;
`
const Footer = styled.div`
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
`

function ListTripsPage() {

    const history = useHistory()

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <Header>
                <h1>LabeX Viagens</h1>
            </Header>
            <div>
                <Main>
                    <ContainerBotoes>
                        <Botaopadrao onClick={goBack}>Voltar</Botaopadrao>
                        <Botaopadrao onClick={goToApplicationFormPage}>Inscrever-se</Botaopadrao>
                    </ContainerBotoes>

                    <h3>Lista de Viagens</h3>

                    <ContainerAllTrips>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <p>características da viagem</p>
                            <p>demais dados</p>
                        </ContainerTrip>
                    </ContainerAllTrips>
                </Main>
            </div>
            <Footer>
                <p>Todos os direitos reservados ®</p>
            </Footer>
        </div>

    )
}

export default ListTripsPage