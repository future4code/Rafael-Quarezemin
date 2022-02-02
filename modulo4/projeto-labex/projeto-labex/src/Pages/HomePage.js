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


function HomePage() {

const history = useHistory()

const goToListTripsPage = () => {
    history.push("/trips/list")
}

const goToAdminHomePage = () => {
    history.push("/admin/trips/list")
}

    return (
        <div>
            <Header>
                <h1>LabeX Viagens</h1>
                <Botaopadrao onClick={goToAdminHomePage}>Login</Botaopadrao>
            </Header>

            <Main>
                <Botaopadrao onClick={goToListTripsPage}>Ver Viagens</Botaopadrao>
            </Main>

            <Footer>
                <p>Todos os direitos reservados ®</p>
            </Footer>
        </div>
    )
}

export default HomePage