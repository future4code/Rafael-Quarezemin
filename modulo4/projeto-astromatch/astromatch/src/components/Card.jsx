import ribamar from "../icons/ribamar.jpeg"
import astroMatch from "../icons/astroMatch.png"
import allMatches from "../icons/allMatches.png"
import match from "../icons/match.png"
import noMatch from "../icons/noMatch.png"
import styled from 'styled-components'

const ContainerCard = styled.div`
    border-radius:10px;
    border: 2px solid black;
    padding: 10px;
    width: 250px;
    height: 480px;
    background-color: white;
    text-align: center
`

const CharacterPhoto = styled.img`
    width: 250px;
    height: 250px;

`

const TopCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 50px
`
const BottonCard = styled.div`
    display: flex;
    justify-content: space-evenly
`

const IconMatches = styled.img`
    width: 35px;
`
const BottonIcons = styled.img`
    width: 60px;
`

function Card(props) {
    return (

        <ContainerCard>

            <TopCard>
                <img src={astroMatch} />
                <IconMatches src={allMatches} />
                <br/>
            </TopCard>
            <CharacterPhoto src={ribamar} />
            <h3>{props.name}, {props.age}</h3>
            <p>{props.description}</p>
            <BottonCard>
                <BottonIcons src={noMatch}/>
                <BottonIcons src={match}/>
            </BottonCard>


        </ContainerCard>


    )
}

export default Card