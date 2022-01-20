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
    width: 45vw;
    height: 8vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
`
const ContainerAllTrips = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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

function AdminHomePage() {

    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push("/admin/trips/:id")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToTripDetailsPage = () => {
        history.push("/admin/trips/create")
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
                    <h3>Painel Administrativo</h3>
                    <ContainerBotoes>
                        <Botaopadrao onClick={goBack}>Voltar</Botaopadrao>
                        <Botaopadrao onClick={goToCreateTripPage}>Criar Viagem</Botaopadrao>
                        <Botaopadrao onClick={goToLoginPage}>Logout</Botaopadrao>
                    </ContainerBotoes>

                    <ContainerAllTrips>
                        <ContainerTrip onClick={goToTripDetailsPage}>
                            <h3>Viagem da Labenu</h3>
                            <button>x</button>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <button>x</button>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <button>x</button>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <button>x</button>
                        </ContainerTrip>
                        <ContainerTrip>
                            <h3>Viagem da Labenu</h3>
                            <button>x</button>
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

export default AdminHomePage