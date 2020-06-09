import React, { Component } from 'react';
import {
    Header,
    Footer,
    BotaoRosa,
    BotaoVerde,
    BtnWrapper,
    Wrapper,
} from './styles';
import Logo from '../assets/logo.svg';
import LogoBIG from '../assets/logoBIG.svg';
import LandingPage from './../pages/LandingPage';
import Consumidor from './../pages/Consumidor';
import Profissional from '../pages/LandingPage';

export class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: 0,
        };
    }

    goToConsumer = () => {
        this.setState({ pages: 1 });
        console.log(this.state.pages);
    };

    goToProfessional = () => {
        this.setState({ pages: 2 });
        console.log(this.state.pages);
    };

    handlePageSwitch = () => {
        switch (this.state.pages) {
            case 0:
                return (
                    <Wrapper>
                        <LandingPage />
                        <BtnWrapper>
                            <BotaoRosa onClick={this.goToConsumer}>
                                Quero contratar
                            </BotaoRosa>
                            <BotaoVerde onClick={this.goToProfessional}>
                                Quero trabalhar
                            </BotaoVerde>
                        </BtnWrapper>
                    </Wrapper>
                );
            case 1:
                return <Consumidor />;
            case 2:
                return <Profissional />;
            default:
                return <LandingPage />;
        }
    };

    render() {
        return (
            <div>
                <Header style={{ display: 'none' }}>
                    <img src={Logo} alt="" />
                </Header>
                {this.handlePageSwitch()}
                <Footer style={{ display: 'none' }}>
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
