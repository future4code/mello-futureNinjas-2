import React, { Component } from 'react';
import axios from 'axios';
import { Container } from './styles';
import { TextField } from '@material-ui/core';
import { ServiceCard } from '../ContainerServiços/styles';
import Logo from '../../assets/logoBIG.svg';

export class Profissional extends Component {
    state = {
        title: '',
        description: '',
        value: '',
        paymentMethods: '',
        dueDate: '',
    };

    handleCreateJob = () => {
        const body = {
            title: this.state.title,
            description: this.state.description,
            value: Number(this.state.value),
            paymentMethods: this.state.paymentMethods.split(','),
            dueDate: this.state.dueDate,
        };

        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs',
                body
            )
            .then(() => {
                this.setState({
                    title: '',
                    description: '',
                    value: '',
                    paymentMethods: '',
                    dueDate: '',
                });
                alert('Sua oferta de trabalho foi registrada!');
            })
            .catch((error) => {
                alert(
                    'Houve um erro, certifique-se de atender aos requisitos de formato'
                );
            });
    };

    //////////////////// Funções aqui

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    };

    handleValueChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handlePaymentChange = (event) => {
        this.setState({ paymentMethods: event.target.value });
    };

    handleDateChange = (event) => {
        this.setState({ dueDate: event.target.value });
        console.log(this.state.dueDate);
    };

    render() {
        return (
            <Container>
                <ServiceCard style={{ padding: 20 }}>
                    <h2>{this.state.title}</h2>
                    <h4>{this.state.description}</h4>
                    <h4>
                        {this.state.value.length > 0 ? 'R$' : ''}
                        {this.state.value}
                    </h4>
                    <h4>{this.state.paymentMethods}</h4>
                    <h4>
                        {this.state.dueDate.length > 0 ? 'Prazo Final: ' : ''}
                        {this.state.dueDate}
                    </h4>
                    <img src={Logo} alt="logo" />
                </ServiceCard>

                <div>
                    <span>
                        <TextField
                            id="standard-basic"
                            label="O nome do seu serviço"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        ></TextField>
                    </span>
                    <span>
                        <TextField
                            id="standard-basic"
                            label="A descrição do seu serviço"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        ></TextField>
                    </span>
                    <span>
                        <TextField
                            id="standard-basic"
                            label="O preço do seu serviço"
                            title="Lembre-se de digitar o valor em Reais (BRL)"
                            value={this.state.value}
                            onChange={this.handleValueChange}
                        ></TextField>
                    </span>

                    <span>
                        <TextField
                            id="standard-basic"
                            label="Métodos de pagamento"
                            title="Lembre-se de separá-los por vírgula"
                            value={this.state.paymentMethods}
                            onChange={this.handlePaymentChange}
                        ></TextField>
                    </span>

                    <span>
                        <label htmlFor="">
                            A data final para que seu serviço seja feito:
                        </label>
                        <TextField
                            value={this.state.dueDate}
                            onChange={this.handleDateChange}
                            type="date"
                        ></TextField>
                    </span>

                    <span>
                        <button onClick={this.handleCreateJob}>
                            CADASTRAR MEU SERVIÇO
                        </button>
                    </span>
                </div>
            </Container>
        );
    }
}

export default Profissional;
