import React from 'react';
import NoteInput from '../components/content/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';

function AddPage() {
  const navigate = useNavigate();
  const locale = localStorage.getItem('locale');

  function onAddNoteHandler(note) {
    const title = note.title;
    const body = note.body;
    addNote({ title, body });
    navigate('/');
  }

  return (
    <section className="container">
      <h2 className="add-page-title">{locale === 'en' ? 'Create Note' : 'Buat Catatan'}</h2>
      <NoteInput addNote={onAddNoteHandler} locale={locale} />
    </section>
  );
}

export default AddPage;
