import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ type, notes, onDelete, onArchive, onUnarchive }) {
  let content = notes.map((note) => {
    return (
      <NoteItem
        key={note.id}
        note={note}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
    );
  });

  if (content.length === 0) {
    return (
      <div className="note-list">
        <h2 className="note-list__title">{type}</h2>
        <p className="note-empty">Empty Now ...</p>
      </div>
    );
  } else {
    return (
      <div className="note-list">
        <h2 className="note-list__title">{type}</h2>
        <div className="note-list__content">{content}</div>
      </div>
    );
  }
}

NoteList.propTypes = {
  type: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteList;
