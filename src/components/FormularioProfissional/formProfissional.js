import React, { Component } from 'react';
import axios from 'axios';
import { Container } from './styles';
import { TextField } from '@material-ui/core';
import { ServiceCard } from '../ContainerServiços/styles';
import Logo from '../../assets/logoBIG.svg';
import isFuture from 'date-fns/isFuture';
import { parseISO, format } from 'date-fns';

export class Profissional extends Component {
    state = {
        title: '',
        description: '',
        value: '',
        paymentMethods: '',
        dueDate: '',
    };

    handleCreateJob = () => {
        if (isFuture(this.state.dueDate)) {
            alert('Essa data já passou ou não está disponível.');
        } else if (this.state.description === '') {
            alert('Adicione uma descrição ao serviço que você deseja.');
        } else if (this.state.value === '') {
            alert('Adicione um valor ao serviço que você deseja.');
        } else if (this.state.paymentMethods === '') {
            alert('Adicione pelo menos um método de pagamento.');
        } else if (this.state.dueDate === '') {
            alert('Adicione uma data final para seu serviço.');
        } else {
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
        }
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
                        {this.state.dueDate.length > 0
                            ? 'Prazo Final: ' +
                              format(
                                  parseISO(this.state.dueDate),
                                  "'Dia' dd 'de' MMMM 'de' yyyy'"
                              )
                            : ''}
                    </h4>
                    <img src={Logo} alt="logo" />
                </ServiceCard>

                <div>
                    <span>
                        <TextField
                            label="O nome do seu serviço"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        ></TextField>
                    </span>
                    <span>
                        <TextField
                            label="A descrição do seu serviço"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        ></TextField>
                    </span>
                    <span>
                        <TextField
                            label="O preço do seu serviço"
                            title="Lembre-se de digitar o valor em Reais (BRL)"
                            value={this.state.value}
                            onChange={this.handleValueChange}
                            type="number"
                        ></TextField>
                    </span>

                    <span>
                        <TextField
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
