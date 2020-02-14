import React, { Component } from 'react';
import axios from 'axios';
export default class Sign extends Component {

    constructor(props) {
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSenha = this.onChangeSenha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            senha: '',
        }
    }

    onChangeNome(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeSenha(e) {
        this.setState({
            senha: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            email: this.state.email,
            senha: this.state.senha
        };

        console.log(obj);

        axios.post('http://localhost/growapp/insert.php', obj)
        .then(res => console.log(res.data));

        this.setState({
            name: '',
            email: '',
            senha: ''
        });
    }

    render() {
        return (
            <div>
                <section className='contact-section' title='Imagem do formulário de cadastro'>
                    <div className='content-div' title='Formulário de cadastro'>
                        <form className='inner-width' onSubmit={this.onSubmit}>
                            <img src='../Logotipo.svg' alt='logotipo da empresa' />
                            <input type='type' className='email' placeholder='Nome' title='Campo nome' value={this.state.nome} onChange={this.onChangeNome} required/>
                            <input type='email' className='email' placeholder='Seu e-mail' title='Campo do e-mail' value={this.state.email} onChange={this.onChangeEmail} required/>
                            <input type='password' className='password' placeholder='Senha' title='Campo senha' value={this.state.senha} onChange={this.onChangeSenha} required/>
                            <button className='button-submit' type='submit' title='Botão de cadastro'>Cadastrar</button>
                            <a href='/login' title='Já sou cadastrado'>Já sou cadastrado</a>
                        </form>
                    </div>
                </section>
            </div>
        );
    }

}