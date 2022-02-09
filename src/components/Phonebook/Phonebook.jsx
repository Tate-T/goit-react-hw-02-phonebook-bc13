import { Component } from 'react';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';
// import shortid from 'shortid';
import s from './Phonebook.module.css';


class Phonebook extends Component {
    state = {
        contacts: [
            // { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
            // { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
            // { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
            // { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prev => ({ prev: this.state.contacts }));
    }

    addToFilterState = (e) => {
        const filter = e.target.value;
        this.setState({
            filter: filter,
        });
    }

    // isThereThisContact = name =>
    //     this.state.contacts.some(
    //         contact => contact.name.toLowerCase() === name.toLowerCase(),
    //     );

    // deleteContact = e => {
    //     const id = e.target.id;
    //     this.setState(prev => ({
    //         contacts: prev.contacts.filter(contact => contact.id !== id),
    //     }));
    // };

    findContact = () =>
        this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
        );

    render() {
        return (
            <form className={s.form}>
                <Form name={this.state.name} number={this.state.number} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
                <div className={s.contactsForm}>
                    <Contacts contacts={this.state.contacts} id={this.state.contacts.id} />
                    <Filter filter={this.state.filter} addToFilterState={this.addToFilterState} handleSubmit={this.handleSubmit} />
                </div>
            </form>
        )
    }
}

export default Phonebook