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

function LoginPage() {
    return (
        <div>
            <Header>
                <h1>LabeX Viagens</h1>
            </Header>

            <Main>
                <h2>Login</h2>
                <form>
                    <fieldset>
                        <label>E-mail: </label><input class="campo_nome" type="text" /><br />
                        <label>Senha: </label><input class="campo_nome" type="text" /><br />
                    </fieldset>
                    <br /><br />
                </form>
                <ContainerBotoes>
                    <Botaopadrao>Voltar</Botaopadrao>
                    <Botaopadrao>Entrar</Botaopadrao>
                </ContainerBotoes>
            </Main>

            <Footer>
                <p>Todos os direitos reservados ®</p>
            </Footer>
        </div>

    )
}

export default LoginPage