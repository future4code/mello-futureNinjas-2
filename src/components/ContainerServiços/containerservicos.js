import React from 'react';
import axios from 'axios';
import {
    Container,
    Filters,
    JobCart,
    FabSetter,
    ServiceCard,
    PaymentOption,
    CartCards,
} from './styles';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { Fab, NativeSelect } from '@material-ui/core';

export default class ServicesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            takenJobs: [],
            show: false,
        };
    }

    componentDidMount() {
        axios
            .get(
                'https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs'
            )
            .then((response) => {
                this.setState({
                    jobs: response.data.jobs.map((item) => item),
                });
            });
    }

    componentDidUpdate() {
        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs'
        );
    }

    newMethod = () => {
        const searchParam = new RegExp(this.props.searchByTitle, 'gi');
        return searchParam;
    };

    sortItemsbyValue = (e) => {
        if (e.target.value === 'crescente') {
            this.setState({
                jobs: [...this.state.jobs].sort((a, b) => a.value - b.value),
            });
        } else if (e.target.value === 'decrescente') {
            this.setState({
                jobs: [...this.state.jobs].sort((a, b) => b.value - a.value),
            });
        }
    };

    sortItemsbyTitle = (e) => {
        if (e.target.value === 'crescente') {
            this.setState({
                jobs: [...this.state.jobs].sort(function (a, b) {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                }),
            });
        } else if (e.target.value === 'decrescente') {
            this.setState({
                jobs: [...this.state.jobs].sort(function (a, b) {
                    if (a.title < b.title) {
                        return 1;
                    }
                    if (a.title > b.title) {
                        return -1;
                    }
                    return 0;
                }),
            });
        }
    };

    handleTakeJob(id) {
        axios.put(
            `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs/${id}/giveup`
        );

        const searchInJobs = this.state.jobs.findIndex(
            (item) => item.id === id
        );

        const searchInTakenJobs = this.state.takenJobs.findIndex(
            (item) => item.id === id
        );

        if (searchInTakenJobs === -1) {
            this.setState({
                takenJobs: [
                    ...this.state.takenJobs,
                    this.state.jobs[searchInJobs],
                ],
            });
        } else {
            return;
        }
    }

    handleGiveUpJob = (id) => {
        axios.put(
            `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs/${id}/giveup`
        );

        console.log(this.state.takenJobs);

        const searchInTakenJobs = this.state.takenJobs.findIndex(
            (item) => item.id === id
        );

        if (searchInTakenJobs === -1) {
            return;
        } else {
            this.state.takenJobs.splice(searchInTakenJobs, 1);
            this.setState({ takenJobs: [...this.state.takenJobs] });
        }
    };

    takeAllJobs = () => {
        for (let items of this.state.takenJobs) {
            axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs/${items.id}`
            );
        }
        this.setState({ takenJobs: [] });
    };

    render() {
        return (
            <>
                <Filters>
                    <span>
                        <label htmlFor="">Ordene por valor</label>
                        <NativeSelect onChange={this.sortItemsbyValue} name="">
                            <option value="0"></option>
                            <option value="crescente">
                                Ordem de valor crescente
                            </option>
                            <option value="decrescente">
                                Ordem de valor decrescente
                            </option>
                        </NativeSelect>
                    </span>
                    <span>
                        <label htmlFor="">Ordene por Título</label>
                        <NativeSelect
                            onChange={this.sortItemsbyTitle}
                            name=""
                            id=""
                        >
                            <option value="0"></option>
                            <option value="crescente">A-Z</option>
                            <option value="decrescente">Z-A</option>
                        </NativeSelect>
                    </span>
                </Filters>
                <FabSetter>
                    <i>{this.state.takenJobs.length}</i>
                    <Fab
                        variant="extended"
                        onClick={() =>
                            this.setState({ show: !this.state.show })
                        }
                    >
                        Seus trabalhos
                    </Fab>
                </FabSetter>
                <JobCart
                    style={{
                        display: this.state.show === true ? 'block' : 'none',
                    }}
                >
                    <div>
                        {this.state.takenJobs.map((item) => (
                            <>
                                <CartCards>
                                    <p>{item.title}</p>
                                    <p>
                                        Prazo:{' '}
                                        {Number(
                                            new Date(item.dueDate).getDate()
                                        ) +
                                            1 +
                                            '/' +
                                            (Number(
                                                new Date(
                                                    item.dueDate
                                                ).getMonth()
                                            ) +
                                                1 <
                                            10
                                                ? '0'
                                                : '') +
                                            (Number(
                                                new Date(
                                                    item.dueDate
                                                ).getMonth()
                                            ) +
                                                1) +
                                            '/' +
                                            new Date(
                                                item.dueDate
                                            ).getFullYear()}
                                    </p>
                                    <p>Pagamento: R${item.value}</p>
                                    <button
                                        onClick={() =>
                                            this.handleGiveUpJob(item.id)
                                        }
                                    >
                                        Excluir
                                    </button>
                                </CartCards>
                            </>
                        ))}
                    </div>
                    <button onClick={this.takeAllJobs}>
                        ACEITAR TRABALHOS
                    </button>
                </JobCart>
                <Container>
                    {this.state.jobs.map((item) => {
                        if (
                            item.title.match(this.newMethod()) &&
                            item.value <= this.props.valMax &&
                            item.value >= this.props.valMin
                        ) {
                            return (
                                <ServiceCard
                                    style={{
                                        wordBreak: 'break-all',
                                    }}
                                    key={item.id}
                                >
                                    <CardContent>
                                        <h3>{item.title}</h3>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                        >
                                            R$ {item.value}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                        >
                                            {item.description}
                                        </Typography>
                                        <p>
                                            Prazo final:{' '}
                                            {Number(
                                                new Date(item.dueDate).getDate()
                                            ) +
                                                1 +
                                                '/' +
                                                (Number(
                                                    new Date(
                                                        item.dueDate
                                                    ).getMonth()
                                                ) +
                                                    1 <
                                                10
                                                    ? '0'
                                                    : '') +
                                                (Number(
                                                    new Date(
                                                        item.dueDate
                                                    ).getMonth()
                                                ) +
                                                    1) +
                                                '/' +
                                                new Date(
                                                    item.dueDate
                                                ).getFullYear()}
                                        </p>
                                        <p>Métodos de pagamento:</p>
                                        {item.paymentMethods.map(
                                            (paymentMethod) => (
                                                <PaymentOption>
                                                    {paymentMethod}
                                                </PaymentOption>
                                            )
                                        )}

                                        <span>
                                            <button
                                                variant="outlined"
                                                color="primary"
                                                onClick={() =>
                                                    this.handleTakeJob(item.id)
                                                }
                                            >
                                                PEGAR TRABALHO
                                            </button>
                                        </span>
                                    </CardContent>
                                </ServiceCard>
                            );
                        }
                    })}
                </Container>
            </>
        );
    }
}
