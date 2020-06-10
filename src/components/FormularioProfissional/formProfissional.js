import React, { Component } from 'react';
import axios from 'axios';

export class Profissional extends Component {
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

    handleTitleChange = (evento) => {
        const newTitle = event.target.value;
        this.setState({title : newTitle});
    };

    handleDescriptionChange = (evento) => {
        const newDescription = event.target.value;
        this.setState({description : newDescription});
    };

    handleValueChange = (evento) => {
        const newValue = event.target.value;
        this.setState({value : newValue});
    };

    handlePaymentChange = (evento) => {
        const newPayment = event.target.value;
        this.setState({paymentMethods : newPayment});
    };

    handleDateChange = (evento) => {
        const newDate = event.target.value;
        this.setState({dueDate : newDate}); 
    };
    
    

    render() {
    
        return (
            
            <Container>
                  <div>
                    Texto sobre o produto
                  </div>
  
                  <div>
                      <p>
                      <input value={this.state.title} onChange={this.handleTitleChange} placeholder="Trabalho"></input>
                      </p>
                      
                      <p>
                      <input value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Descrição"></input>
                      </p>
                       
                      <p>
                      <input value={this.state.value} onChange={this.handleValueChange}  placeholder="Valor"></input>
                      </p>
                      
                      <p>
                      <input value={this.state.paymentMethods} onChange={this.handlePaymentChange} placeholder="Forma de pagamento"></input>
                      </p>

                      <p>
                      <input value={this.state.dueDate} onChange={this.handleDateChange} placeholder="Data"></input>
                      </p>
          
                      <p>
                      <button onClick={this.handleCreateJob}>Cadastre-se</button>
                      </p>
                      
                    </div>
  
  
            </Container>
              
           
          );
      
        }
    }
  
      
  
  
  export default Profissional;