import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';

function DeleteButton({ note, onDelete }) {
  const locale = localStorage.getItem('locale');

  return (
    <button className="note-item-action__delete" onClick={() => onDelete(note.id)}>
      <div className="icon-delete">
        <MdDeleteForever />
      </div>
      {locale === 'en' ? 'Delete' : 'Hapus'}
    </button>
  );
}

DeleteButton.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
