import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';
import PropTypes from 'prop-types';

function NoteItem({ note, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-item">
      <NoteItemContent note={note} />
      <NoteItemAction
        note={note}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteItem;
