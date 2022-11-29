import React from 'react';
import { BiArchiveOut } from 'react-icons/bi';
import PropTypes from 'prop-types';

function UnarchiveButton({ note, onUnarchive }) {
  const locale = localStorage.getItem('locale');

  return (
    <button className="note-item-action__unarchive" onClick={() => onUnarchive(note.id)}>
      <div className="icon-unarchive">
        <BiArchiveOut />
      </div>
      {locale === 'en' ? 'Unarchive' : 'Aktifkan'}
    </button>
  );
}

UnarchiveButton.propTypes = {
  note: PropTypes.object.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default UnarchiveButton;
