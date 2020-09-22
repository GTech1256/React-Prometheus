import React from 'react';

import { Note } from './Note';
import { NoteType } from '../context/firebase/types';


type Props = {
  notes: NoteType[],
  onRemove: (id: NoteType['id']) => Promise<any>
}

export const Notes = ({ notes, onRemove }: Props) => (
  <ul className="list-group">
    {
      // @ts-ignore
      notes.map(note => <Note key={note.id} note={note} onRemove={onRemove} />)
    }
  </ul>
)