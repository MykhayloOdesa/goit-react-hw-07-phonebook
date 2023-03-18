import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import ContactListItem from './ContactListItem/ContactListItem';

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="listContact">
            <ContactListItem id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
