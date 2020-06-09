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
                            placeholder="Busque por um serviço"
                            value={this.state.search}
                            onChange={this.handleSearch}
                        />
                    </span>
                    <span>
                        <label htmlFor="">Valor mínimo</label>
                        <input
                            onChange={this.handleValMin}
                            placeholder="Valor mínimo"
                            value={this.state.valMin}
                            type="number"
                        />
                    </span>
                    <span>
                        <label htmlFor="">Valor máximo</label>
                        <input
                            onChange={this.handleValMax}
                            placeholder="Valor máximo"
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
