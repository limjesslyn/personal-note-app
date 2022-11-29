import React from 'react';
import NoteList from './NoteList';
import NoteSearch from './NoteSearch';
import PropTypes from 'prop-types';

function NoteContent({ type, notes, onDelete, onArchive, onUnarchive, keyword, keywordChange }) {
  return (
    <div className="note-content">
      <NoteSearch keyword={keyword} keywordChange={keywordChange} />
      <NoteList
        type={type}
        notes={notes}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        onDelete={onDelete}
      />
    </div>
  );
}

NoteContent.propTypes = {
  type: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default NoteContent;
