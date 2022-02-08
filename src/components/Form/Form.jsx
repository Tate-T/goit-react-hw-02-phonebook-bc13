import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import shortid from 'shortid';
import s from './Form.module.css';


class Form extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    }

    idEl = shortid.generate();

    handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prev => ({ prev: this.state.contacts }));
        this.reset()
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <Phonebook name={this.state.name} number={this.state.number} onChange={this.handleInputChange} />
                <Contacts contacts={this.state.contacts} />
            </form>
        )
    }
}

export default Form