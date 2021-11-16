import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './images/RafaelPerfil.jpeg';
import LogoMBR from './images/logoMbr.png';
import LogoTRT from './images/logoTRT.png';
import IconeEndereco from './images/iconeEndereco.jpg';
import IconeEmail from './images/iconeEmail.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil}
          nome="Rafael Blasques Quarezemin" 
          descricao="Foco atual na mudança de carreira. Estudante Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem={IconeEmail}
          nome="E-mail: rafael.quarezemin@gmail.com"
        />

        <CardPequeno
          imagem={IconeEndereco}
          nome="Endereço: Rua Labenu"
        />  

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LogoMBR}
          nome="MBR Construtora" 
          descricao="Construindo casas e realizando sonhos!" 
        />
        
        <CardGrande 
          imagem={LogoTRT} 
          nome="TRT 2º Região" 
          descricao="Realizando licitações e alterando contratos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
