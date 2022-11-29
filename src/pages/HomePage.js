import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteContent from '../components/content/NoteContent';
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from '../utils/network-data';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [notes, setNotes] = React.useState([]);

  const locale = localStorage.getItem('locale');
  const [initializing, setInitializing] = useState(true);

  async function onDeleteHandler(id) {
    deleteNote(id);
    const { error, data } = await getActiveNotes();
    if (!error) {
      setNotes(data);
    }
  }

  async function onArchiveHandler(id) {
    archiveNote(id);
    const { error, data } = await getActiveNotes();
    if (!error) {
      setNotes(data);
    }
  }

  async function onUnarchiveHandler(id) {
    unarchiveNote(id);
    const { error, data } = await getArchivedNotes();
    if (!error) {
      setNotes(data);
    }
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  useEffect(() => {
    async function fetchNotes() {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }
    }
    fetchNotes();
    setInitializing(false);
  }, [notes]);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (initializing === true) {
    return <div id="indicator"></div>;
  }

  return (
    <div className="container">
      <NoteContent
        type={locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        onUnarchive={onUnarchiveHandler}
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
    </div>
  );
}
export default HomePage;
