import React from 'react';
import PropTypes from 'prop-types';

function NoteSearch({ keyword, keywordChange }) {
  const locale = localStorage.getItem('locale');

  return (
    <div className="note-search">
      <h2>{locale === 'en' ? 'Search Notes' : 'Cari Catatan'}</h2>
      <input
        type="text"
        placeholder={locale === 'en' ? 'find notes ...' : 'cari catatan disini ...'}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

NoteSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default NoteSearch;
