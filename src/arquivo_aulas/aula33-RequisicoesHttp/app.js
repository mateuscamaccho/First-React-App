import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url,)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        })

    }

    loadApi();
  }, []);

  return (
    <div className='container'>
      <header>
        <strong>AppNutri React</strong>
      </header>

      {
        nutri.map((item) => {
          return (
            <article key={item.id} className='post'>
              <strong className='titulo'>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className='capa' />
              <p className='subtitulo'>
                {item.subtitulo}
              </p>
              <h3>Categoria: {item.categoria}</h3>
              <a className='botao'>acessar</a>
            </article>
          )
        })
      }
    </div>
  );
}

export default App;

 