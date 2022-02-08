import { Component } from 'react';
import Form from './components/Form/Form';
// import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleInputChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  // handleSubmit = () => {
  //   e.preventDefault()

  // }

  render() {
    return (
      <Form contacts={this.state.contacts} name={this.state.name} number={this.state.number} onSubmit={this.handleSubmit} onChange={this.handleInputChange} />
    );
  }
}

export default App;
