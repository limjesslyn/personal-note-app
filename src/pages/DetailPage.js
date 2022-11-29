import React, { useEffect, useState } from 'react';
import NoteDetail from '../components/content/NoteDetail';
import { useParams, useNavigate } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';

function DetailPage() {
  const [note, setNote] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [initializing, setInitializing] = useState(true);

  async function onDeleteHandler(id) {
    deleteNote(id);
    navigate('/');
  }

  async function onArchiveHandler(id) {
    archiveNote(id);
    navigate('/');
  }

  async function onUnarchiveHandler(id) {
    unarchiveNote(id);
    navigate('/');
  }
  useEffect(() => {
    async function fetchNotes() {
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }
    }
    fetchNotes();
    setInitializing(false);
  }, [id]);

  if (initializing === true) {
    return <div id="indicator"></div>;
  }

  if (note === undefined) {
    return <p>Note not found !</p>;
  }
  
  return (
    <div className="container">
      <section className="note-detail-content">
        <NoteDetail
          note={note}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
          onUnarchive={onUnarchiveHandler}
        />
      </section>
    </div>
  );
}

export default DetailPage;
