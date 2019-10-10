import React, { useState, useContext, useRef, useEffect } from 'react';

import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

import { OverlayLoader } from '../hoc/OverlayLoader/OverlayLoader';

const FormWithoutOverlay = ({ isShowLoading, setShowLoading }) => {

  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const formInputRef = useRef();

  useEffect(() => {
    formInputRef.current.focus()
  }, [])

  

  const addNoteSuccessHandler = () => {
    setValue('');
    
    alert.show('Заметка была создана', 'success')
  }

  const addNoteErrorHandler = (err) => {
    console.error(err)
    alert.show('Что-то пошло не так', 'danger')
  }

  const addNoteEndHandler = () => {
    setShowLoading(false)
    formInputRef.current.focus()
  }

  const sumbitHandler = evt => {
    evt.preventDefault();

    if (value.trim()) {
      setShowLoading(true)

      firebase.addNote(value.trim())
        .then(addNoteSuccessHandler)
        .catch(addNoteErrorHandler)
        .finally(addNoteEndHandler)
    } else {
      alert.show('Введите название заметки')
    }
  }

  return (
      <form onSubmit={sumbitHandler}>
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Введите название заметки"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
            disabled={isShowLoading}
            ref={formInputRef}
          />
        </div>
      </form>
  )

}

export const FormWithOverlayLoader = OverlayLoader(FormWithoutOverlay, false);