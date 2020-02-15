import React, { Component } from 'react';
import axios from 'axios';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSenha = this.onChangeSenha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            senha: ''
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeSenha(e) {
        this.setState({
            senha: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            email: this.state.email,
            senha: this.state.senha
        };

        console.log(obj);

        axios.post('http://localhost/growapp/login.php', obj)
        .then(res => console.log(res.data));

        this.setState({
            email: '',
            senha: ''
        });
    }

    render() {
        return (
            <div>
                <section className='contact-section' title='Imagem do formulário de login'>
                    <div className='content-div' title='Formulário de login'>
                        <form className='inner-width' onSubmit={this.onSubmit}>
                            <img src='../Logotipo.svg' alt='logotipo da empresa' />
                            <input type='email' className='email' placeholder='Seu e-mail' title='Campo e-mail' value={this.state.email} onChange={this.onChangeEmail} required/>
                            <input type='password' className='password' placeholder='Senha' title='Campo senha' value={this.state.senha} onChange={this.onChangeSenha} required/>
                            <button className='button-submit' type='submit' title='Botão para enviar'>Entrar</button>
                            <a href='/cadastro' title='Quero me cadastrar'>Quero me cadastrar</a>
                            <a href='/senha' title='Esqueci a senha'>Esqueci a senha</a>
                        </form>
                    </div>
                </section>
            </div>
        )
    }

}