import React from 'react';
import NoteItemAction from './NoteItemAction';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { showFormattedDate } from '../../utils/network-data';

function NoteDetail({ note, onDelete, onArchive, onUnarchive }) {
  const locale = localStorage.getItem('locale');

  return (
    <div className="note-content">
      <h2 className="note-content__title">{locale === 'en' ? 'Note Details' : 'Detil Catatan'}</h2>
      <div className="note-detail">
        <h3 className="note-detail__title">{note.title}</h3>
        <p className="note-detail__date">{showFormattedDate(note.createdAt)}</p>
        <div className="note-item__body">{parser(note.body)}</div>
      </div>
      <NoteItemAction
        note={note}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
    </div>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteDetail;
