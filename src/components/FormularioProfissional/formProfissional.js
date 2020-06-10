import React, { Component } from 'react';
import axios from 'axios';

export class Formulário extends Component {
    state = {
        title: '',
        description: '',
        value: '',
        paymentMethods: [],
        dueDate: '',
    };

    handleCreateJob = () => {
        const body = {
            title: this.state.title,
            description: this.state.description,
            value: this.state.value,
            paymentMethods: this.state.payment,
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

    getJobs = () => {
        axios
            .get(
                'https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs'
            )
            .then((answer) => {
                this.setState({ jobs: answer.data.result.jobs });
            })
            .catch((error) => {
                console.log('erro!');
            });
    };

    /*    getJob = () => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs/${id}`
            )
            .then((answer) => {
                //this.setState({ jobs: answer.data.result.jobs }); NÃO SEI O QUE FAZER AQUI
            })
            .catch((error) => {
                console.log('erro!');
            });
    };

    handleJobDeletion = () => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs/${id}`
            )
            .then(() => {
                this.getJobs();
                console.log('apagado com sucesso!');
            })
            .catch((error) => {
                console.log('erro ao apagar!');
            });
    };

    handleTakeJob = (id) => {
        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs/${id}/take`
            )
            .then((taken) => {
                return (taken = true);
            })
            .catch((erro) => {
                console.log('deu errado!');
            });
    };

    handleGiveupJob = (id) => {
        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs/${id}/giveup`
            )
            .then((taken) => {
                return (taken = false);
            })
            .catch((erro) => {
                console.log('deu errado!');
            });
    }; */
    

    //////////////////// Funções aqui

    render() {
        return <div>{/* HTML AQUI */}</div>;
    }
}
