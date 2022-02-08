import { Component } from 'react';
import Form from './components/Form/Form';
// import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  }

  render() {
    return (
      <Form />
    );
  }
}

export default App;
