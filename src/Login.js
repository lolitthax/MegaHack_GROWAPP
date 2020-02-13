import React from 'react'
const Login = props => {
    return (
        <div>

            <section className='contact-section' title='Imagem do formulário de login'>
                <div className='Content-div' title='Formulário de login'>
                    <div className='inner-width'>
                        <img src='../Logotipo.svg' alt='logotipo da empresa' />
                        <input type='email' className='email' placeholder='Seu e-mail' title='Campo e-mail' />
                        <input type='password' className='password' placeholder='Senha' title='Campo senha' />
                        <button className='Button-submit' type='submit' title='Botão para enviar'>Entrar</button>
                        <a href='/cadastro' title='Quero me cadastrar'>Quero me cadastrar</a>
                        <a href='#' title='Esqueci a senha'>Esqueci a senha</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login