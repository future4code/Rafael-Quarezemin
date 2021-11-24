import React from 'react';


class Etapa1 extends React.Component {
    render() {
    return(
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual o seu nome?</p>
                <input />
                <p>2. Qual sua idade?</p>
                <input />
                <p>3. Qual seu email?</p>
                <input />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select> <br/><br/> {/*QUAL ALTERNATIVO EU TENHO PARA NÃO USAR ESSES BR??*/}

            </div >
        );
    }
}
export default Etapa1;
