import React from 'react'
const Sign = props => {
    return (
        <div>

            <section className='contact-section' title='Imagem do formulário de cadastro'>
                <div className='Content-div' title='Formulário de cadastro'>
                    <div className='inner-width'>
                        <img src='../Logotipo.svg' alt='logotipo da empresa' />
                        <input type='type' className='email' placeholder='Nome' title='Campo nome' />
                        <input type='email' className='email' placeholder='Seu e-mail' title='Campo do e-mail' />
                        <input type='password' className='password' placeholder='Senha' title='Campo senha' />
                        <button className='Button-submit' type='submit' title='Botão de cadastro'>Cadastrar</button>
                        <a href='/login' title='Já sou cadastrado'>Já sou cadastrado</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Sign