import { Component } from 'react';
import Form from './components/Form/Form';


class App extends Component {

  render() {
    return (
      <Form findContact={this.findContact} />
    );
  }
}

export default App;
