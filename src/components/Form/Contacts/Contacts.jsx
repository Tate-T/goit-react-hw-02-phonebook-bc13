import s from './Contacts.module.css';

const Contacts = ({ contacts }) => {
    return (
        <div className={s.contactsSection}>
            <h2 className={s.contactsTitle}>Contacts:</h2>
            {contacts.map(contact => (
                <ul className={s.contactsList}>
                    <li className={s.contactsItem}>
                        {contact}
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Contacts
