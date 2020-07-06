import React, { useReducer } from 'react';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES } from '../types';

const url = `${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_ROOT || ''}`;

if (!url) {
  throw new Error('REACT_APP_API_HOST в .env не установлен')
}

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  }

  const [ state, dispatch ] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchNotes = async () => {
    showLoader()

    // redux-thunk
    const res = await axios.get(`${url}/notes.json`) // null || Note[]

    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })

    dispatch({
      type:FETCH_NOTES,
      payload: payload || []
    })
  }

  const addNote = async title => {
    const note = {
      title,
      date: new Date().toJSON()
    }

    try {
      const res = await axios.post(`${url}/notes.json`, note)
      
      const payload = {
        ...note,
        id: res.data.name
      }

      dispatch({
        type: ADD_NOTE,
        payload
      })
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({ 
      type: REMOVE_NOTE,
      payload: id
    })
  }

  return(
    <FirebaseContext.Provider value={{
      showLoader, addNote, removeNote,
      fetchNotes, loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}