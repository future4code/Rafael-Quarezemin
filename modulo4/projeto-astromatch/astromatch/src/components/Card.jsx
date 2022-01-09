import ribamar from "../icons/ribamar.jpeg"
import styled from 'styled-components'

const ContainerCard = styled.div`
    border-radius:10px;
    border: 2px solid black;
    padding: 10px;
    max-width: 300px;
    background-color: white;
`


const CharacterPhoto = styled.img`
    width: 100%

`


function Card(props) {
    return (

        <ContainerCard>

            <CharacterPhoto src={ribamar} />
            <h3>{props.name}, {props.age}</h3>
            <p>{props.description}</p>



        </ContainerCard>


    )
}

export default Card