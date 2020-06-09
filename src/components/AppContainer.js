import React, { Component } from 'react';
import { Header, Footer } from './styles';
import Logo from '../assets/logo.svg';
import LogoBIG from '../assets/logoBIG.svg';

export class AppContainer extends Component {
    render() {
        return (
            <div>
                <Header>
                    <img src={Logo} alt="" />
                </Header>
                {/* condicional da pagina */}
                <Footer>
                    <img src={LogoBIG} alt="" />
                    <p>
                        Criado por
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Alexandre-Partida"
                        >
                            <p> Alexandre Gessone</p>,
                        </a>{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Ana-Irala"
                        >
                            <p> Ana Irala</p>,
                        </a>{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Diego-Molinari"
                        >
                            <p>Diego Molinari</p>
                        </a>
                        ,{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Henrique-Botelho"
                        >
                            <p>Henrique Botelho</p>
                        </a>{' '}
                        e{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Victor-Gutierrez"
                        >
                            <p>Victor Gutierrez</p>
                        </a>
                    </p>
                </Footer>
            </div>
        );
    }
}
