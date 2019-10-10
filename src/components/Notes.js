import React from 'react';
import { Note } from './Note';

export const Notes = ({ notes, onRemove }) => (
  <ul className="list-group">
    { 
      notes.map(note => <Note note={note} onRemove={onRemove} />)
    }
  </ul>
)