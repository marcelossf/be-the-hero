import React from 'react';

import './global.css';

import Routes from './routes';

// JSX => JavaScript XML (Sintaxe do HMTL) (Arquivo HTML dentro de um react)
// Componente em React => Função que retorna HTML (Pode ter função de JavaScript/CSS...)
// Propriedade (Atributos) => Atributos repassados para componentes

/** useState -> Retorna um Array com duas posições
   * Primeira posição -> valor da variável
   * Segunda posição -> função de atualização do valor
  */

function App() {
    return (
    <Routes />
  );
}

export default App;
