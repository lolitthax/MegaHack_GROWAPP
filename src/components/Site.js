import React from 'react';
import Primary from './Primary'

const Site = props => {
  return (
    <div>

      <section className='landing-page'>
        <div className='page-content'>
          <img src='../logotipo_branco.svg' alt='logotipo da empresa'/>
          {/* <h1>GrowApp</h1> */}
          <p>
            O GrowApp é a maneira divertida e flexível que auxilia você com seu negócio. Administrar uma empresa não é simples, mas o GrowApp torna grandes desafios em pequenas tarefas, venha conhecer!
    
        </p>
          <a href='/cadastro' className='button-sign' title='cadastrar-se'>Cadastre-se</a>
          <p>Já possui uma conta? <a href='/login' title='Fazer login'>Faça seu login.</a></p>
        </div>
      </section>
      <Primary/>


    </div>
  )


}
export default Site