import { useDispatch, useSelector } from 'react-redux';

import { setQueryFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(setQueryFilter(event.target.value));
  };

  return (
    <div className="inputForm">
      <label className="inputLabel">
        Find contacts by name
        <input
          className="inputField"
          type="text"
          value={filter}
          onChange={onChange}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Mykhaylo Yervachov"
          required
        />
      </label>
    </div>
  );
}
