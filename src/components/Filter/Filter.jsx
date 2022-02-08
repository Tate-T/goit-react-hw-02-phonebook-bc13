
import s from './Filter.module.css';

const Filter = (id, filter, addToFilterState) => {

    return (
        <div className={s.filter}>
            <label className={s.filterTitle}>
                Find contact by name
                <input
                    type="text"
                    name="filter"
                    value=""
                    onChange={addToFilterState}
                    className={s.filterInput}
                />
            </label>
        </div>
    );
}

export default Filter