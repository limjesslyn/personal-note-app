import React from 'react';
import NavigationNoLogin from './NavigationNoLogin';

function NoteHeaderNoLogin() {
  return (
    <div className="note-header">
      <div className="note-header__content">
        <h1>🗒️MiNo</h1>
        <NavigationNoLogin />
      </div>
    </div>
  );
}

export default NoteHeaderNoLogin;
