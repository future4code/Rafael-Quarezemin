import React from 'react';

class Etapa3 extends React.Component {
    render() {
    return(
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERIAS DE ENSINO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select> <br/><br/> {/*QUAL ALTERNATIVO EU TENHO PARA NÃO USAR ESSES BR??*/}

            </div >
        );
    }
}
export default Etapa3;
