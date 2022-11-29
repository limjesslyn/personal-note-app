import React from 'react';
import { BiArchiveIn } from 'react-icons/bi';
import PropTypes from 'prop-types';

function ArchiveButton({ note, onArchive }) {
  const locale = localStorage.getItem('locale');

  return (
    <button className="note-item-action__archive" onClick={() => onArchive(note.id)}>
      <div className="icon-archive">
        <BiArchiveIn />
      </div>
      {locale === 'en' ? 'Archive' : 'Arsipkan'}
    </button>
  );
}

ArchiveButton.propTypes = {
  note: PropTypes.object.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
