import s from './Form.module.css';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

const Form = () => {
    return (
        <div className={s.form}>
            <Phonebook />
            <Contacts />
        </div>
    )
}

export default Form