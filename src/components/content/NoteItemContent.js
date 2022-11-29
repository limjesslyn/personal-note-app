import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { showFormattedDate } from '../../utils/network-data';

function NoteItemContent({ note }) {
  return (
    <div className="note-item-content">
      <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
      <h3 className="note-item__title">
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </h3>
      <div className="note-item__body">{parser(note.body)}</div>
    </div>
  );
}

NoteItemContent.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItemContent;
