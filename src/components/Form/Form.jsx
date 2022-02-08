import s from './Form.module.css';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

const Form = ({ contacts, name, number, onSubmit, onChange }) => {
    return (
        <div className={s.form}>
            <Phonebook name={name} number={number} onSubmit={onSubmit} onChange={onChange} />
            <Contacts contacts={contacts} />
        </div>
    )
}

export default Form