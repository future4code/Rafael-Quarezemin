import returnIcon from "../icons/returnIcon.png"
import astroMatch from "../icons/astroMatch.png"
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
const TopCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 50px
`
const IconMatches = styled.img`
    width: 35px;
`

function MatchesCard(props) {
    return (

        <ContainerCard>
            <TopCard>
                <img src={astroMatch} />
                <IconMatches 
                onClick={props.goToCard} 
                src={returnIcon} />
                <br/>
            </TopCard>
        </ContainerCard>
    )
}

export default MatchesCard