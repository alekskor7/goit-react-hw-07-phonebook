import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <form className={s.form}>
        <label>
          <h3>Find contacts by name:</h3>
          <input
            type="text"
            value={value}
            onChange={e => dispatch(changeFilter(e.target.value))}
            className={s.input}
          />
        </label>
      </form>
    </>
  );
}

// export default connect(null, mapDispatchToProps)(Filter);