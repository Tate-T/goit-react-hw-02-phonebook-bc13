import { Component } from 'react';
import Phonebook from './components/Phonebook/Phonebook';


class App extends Component {

  render() {
    return (
      <Phonebook findContact={this.findContact} />
    );
  }
}

export default App;
