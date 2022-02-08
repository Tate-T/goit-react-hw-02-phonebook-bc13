import { Component } from 'react';
import Phonebook from '../Phonebook/Phonebook';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import shortid from 'shortid';
import s from './Form.module.css';


class Form extends Component {
    state = {
        contacts: [],
        name: '',
        number: '',
        filter: ''
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

    addToFilterState = (e) => {
        const filter = e.target.value;
        this.setState({
            filter: filter,
        });
    }

    findContact = () =>
        this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
        );

    render() {
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <Phonebook name={this.state.name} number={this.state.number} onChange={this.handleInputChange} />
                <div className={s.contactsForm}>
                    <Contacts contacts={this.state.contacts} />
                    <Filter id={this.idEl} filter={this.state.filter} addToFilterState={this.addToFilterState} />
                </div>
            </form>
        )
    }
}

export default Form