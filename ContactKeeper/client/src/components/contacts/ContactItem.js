import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const { _id, name, email, phone, type } = contact;

  const contextContact = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contextContact;

  const onDelete = (e) => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      {name}{' '}
      <h3 className='text-primary text-left'>
        <span
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='List'>
        {email && (
          <li>
            <i className='fas fas-envelope-open'>{email}</i>
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'>{phone}</i>
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
