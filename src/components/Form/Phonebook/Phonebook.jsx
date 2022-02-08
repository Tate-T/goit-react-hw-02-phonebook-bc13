import s from './Phonebook.module.css';

const Phonebook = ({ name, number, onSubmit, onChange }) => {
    return (
        <div>
            <h1>Phonebook</h1>
            <div className={s.phonebookSection}>
                <div className={s.phonebookForm}>
                    <label className={s.title}>Name
                        <input
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            className={s.input}
                            onChange={onChange}
                        />
                    </label>
                    <button onSubmit={onSubmit}>Add contact</button>
                </div>
                <div className={s.phonebookForm}>
                    <label className={s.title}>Number
                        <input
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            className={s.input}
                            onChange={onChange}
                        />
                    </label>
                    <button onSubmit={onSubmit}>Add contact</button>
                </div>
            </div >
        </div>
    )
}

export default Phonebook