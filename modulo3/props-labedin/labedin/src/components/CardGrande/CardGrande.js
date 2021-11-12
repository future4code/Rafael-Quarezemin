import React from 'react';
import styled from "styled-components";

const Tituloh4 = styled.h4 `
    margin-bottom: 15px;    
`
const DivH4eP = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 10%;
`

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

function CardGrande(props) {
    return (
        <BigCard>
            <Imagem src={ props.imagem } />
            <DivH4eP>
                <Tituloh4>{ props.nome }</Tituloh4>
                <p>{ props.descricao }</p>
            </DivH4eP>
        </BigCard>
    )
}

export default CardGrande;