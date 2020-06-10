import React, { Component } from 'react';
import axios from 'axios';

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
                console.log('deu certo!');
            })
            .catch((error) => {
                console.log('erro!');
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
            <div>
                <div>Texto sobre o produto</div>

                <div>
                    <p>
                        <input
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            placeholder="Trabalho"
                        ></input>
                    </p>

                    <p>
                        <input
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                            placeholder="Descrição"
                        ></input>
                    </p>

                    <p>
                        <input
                            value={this.state.value}
                            onChange={this.handleValueChange}
                            placeholder="Valor"
                        ></input>
                    </p>

                    <p>
                        <input
                            value={this.state.paymentMethods}
                            onChange={this.handlePaymentChange}
                            placeholder="Forma de pagamento"
                        ></input>
                    </p>

                    <p>
                        <input
                            value={this.state.dueDate}
                            onChange={this.handleDateChange}
                            placeholder="Data"
                            type="date"
                        ></input>
                    </p>

                    <p>
                        <button onClick={this.handleCreateJob}>
                            Cadastre-se
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Profissional;
