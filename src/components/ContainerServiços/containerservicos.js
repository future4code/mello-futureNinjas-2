import React from 'react';
import axios from 'axios';
import { Container, ServiceCard, Filters } from './styles';

export default class ServicesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
        };
        //https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs
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

    render() {
        return (
            <>
                <Filters>
                    <span>
                        <label htmlFor="">Ordene por valor</label>
                        <select onChange={this.sortItemsbyValue} name="" id="">
                            <option value="0"></option>
                            <option value="crescente">
                                Ordem de valor crescente
                            </option>
                            <option value="decrescente">
                                Ordem de valor decrescente
                            </option>
                        </select>
                    </span>
                    <span>
                        <label htmlFor="">Ordene por Título</label>
                        <select onChange={this.sortItemsbyTitle} name="" id="">
                            <option value="0"></option>
                            <option value="crescente">
                                Ordem de valor crescente
                            </option>
                            <option value="decrescente">
                                Ordem de valor decrescente
                            </option>
                        </select>
                    </span>
                </Filters>

                <Container>
                    {this.state.jobs.map((item) => {
                        if (
                            item.title.match(this.newMethod()) &&
                            item.value <= this.props.valMax &&
                            item.value >= this.props.valMin
                        ) {
                            return (
                                <ServiceCard key={item.id}>
                                    <h3> {item.title} </h3>
                                    <h4> R$ {item.value}</h4>
                                    <p>{item.description}</p>
                                    <p>Prazo final: {item.dueDate}</p>
                                    <p>Métodos de pagamento:</p>
                                    {item.paymentMethods.map(
                                        (paymentMethod) => (
                                            <span style={{ listStyle: 'none' }}>
                                                {paymentMethod}
                                            </span>
                                        )
                                    )}
                                </ServiceCard>
                            );
                        }
                    })}
                </Container>
            </>
        );
    }
}
