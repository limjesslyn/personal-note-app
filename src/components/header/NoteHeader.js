import React from 'react';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

function NoteHeader({ logout }) {
  return (
    <div className="note-header">
      <div className="note-header__content">
        <h1>🗒️MiNo</h1>
        <Navigation logout={logout} />
      </div>
    </div>
  );
}

NoteHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NoteHeader;
