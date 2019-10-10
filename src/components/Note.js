import React, { useContext, Fragment } from 'react';
import { OverlayLoader } from '../hoc/OverlayLoader/OverlayLoader';
import { AlertContext } from '../context/alert/alertContext';

export const NoteWithoutLoader = ({ note, onRemove, setShowLoading }) => {

  const alert = useContext(AlertContext)

  const onRemoveSuccessHandler = () => {
    alert.show('Заметка успешно удалена', 'success')
  }

  const onRemoveErrorHandler = (err) => {
    console.log(err)
    alert.show('Что-то пошло не так', 'danger')
  }

  const btnNoteClickHandler = () => {
    setShowLoading(true)
    onRemove(note.id)
      .then(onRemoveSuccessHandler)
      .catch(onRemoveErrorHandler)
      .finally(() => setShowLoading(false))
  }

  return (
    <Fragment>
      <div>
        <strong>{note.title}</strong>

        <small>{note.date}</small>
      </div>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={btnNoteClickHandler}
      >
        &times;
      </button>
    </Fragment>
  )
}

export const Note = OverlayLoader(NoteWithoutLoader, false, 'li', ['list-group-item', 'note'])