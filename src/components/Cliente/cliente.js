import React, { Component } from 'react';
import ServicesContainer from './../ContainerServiços/containerservicos';
import { Container } from './styles';

export default class Cliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            valMax: 10000,
            valMin: 0,
        };
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    handleValMax = (e) => {
        this.setState({ valMax: e.target.value });
    };

    handleValMin = (e) => {
        this.setState({ valMin: e.target.value });
    };

    render() {
        return (
            <>
                <Container>
                    <span>
                        <label htmlFor="">Busque um serviço</label>
                        <input
                            type="text"
                            value={this.state.search}
                            onChange={this.handleSearch}
                        />
                    </span>
                    <span>
                        <label htmlFor="">Pagamento mínimo</label>
                        <input
                            onChange={this.handleValMin}
                            value={this.state.valMin}
                            type="number"
                        />
                    </span>
                    <span>
                        <label htmlFor="">Pagamento máximo</label>
                        <input
                            onChange={this.handleValMax}
                            value={this.state.valMax}
                            type="number"
                        />
                    </span>
                </Container>
                <ServicesContainer
                    searchByTitle={this.state.search}
                    valMax={this.state.valMax}
                    valMin={this.state.valMin}
                />
            </>
        );
    }
}
