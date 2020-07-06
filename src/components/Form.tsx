import React, {
  useRef,
  useState,
  useEffect,
  useContext,
} from 'react';

import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

import { OverlayLoader } from '../hoc/OverlayLoader/OverlayLoader';


type Props = {
  isShowLoading: boolean
  setShowLoading: (isShowLoading: boolean) => void
}

const FormWithoutOverlay = ({ isShowLoading, setShowLoading }: Props) => {

  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const formInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (formInputRef.current) {
      formInputRef.current.focus()
    }
  }, [])

  

  const addNoteSuccessHandler = () => {
    setValue('');
    
    // @ts-ignore
    alert.show('Заметка была создана', 'success')
  }

  const addNoteErrorHandler = (errorMessage: string) => {
    console.error(errorMessage)

    // @ts-ignore
    alert.show('Что-то пошло не так', 'danger')
  }

  const addNoteEndHandler = () => {
    setShowLoading(false)

    if (formInputRef.current) {
      formInputRef.current.focus()
    }
  }

  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!value.trim()) {
      // @ts-ignore
      alert.show('Введите название заметки')
      return
    }

    setShowLoading(true)

    // @ts-ignore
    firebase.addNote(value.trim())
      .then(addNoteSuccessHandler)
      .catch(addNoteErrorHandler)
      .finally(addNoteEndHandler)
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