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
                        Criado por Alexandre Gessone, Ana Irala, Diego Molinari,
                        Henrique Botelho e Victor Gutierrez
                    </p>
                </Footer>
            </div>
        );
    }
}
