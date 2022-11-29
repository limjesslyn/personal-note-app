import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import UnarchiveButton from './UnarchiveButton';
import PropTypes from 'prop-types';

function NoteItemAction({ note, onDelete, onUnarchive, onArchive }) {
  if (note.archived) {
    return (
      <div className="note-item-action">
        <UnarchiveButton note={note} onUnarchive={onUnarchive} />
        <DeleteButton note={note} onDelete={onDelete} />
      </div>
    );
  } else {
    return (
      <div className="note-item-action">
        <ArchiveButton note={note} onArchive={onArchive} />
        <DeleteButton note={note} onDelete={onDelete} />
      </div>
    );
  }
}

NoteItemAction.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteItemAction;
