import React, { Fragment, useContext, useEffect } from 'react';

import { FirebaseContext } from '../context/firebase/firebaseContext';

import { FormWithOverlayLoader } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';


export const Home = () => {
  // @ts-ignore
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <FormWithOverlayLoader /> 

      <hr/>

      {
        loading ?
          <Loader /> :
          <Notes notes={notes} onRemove={removeNote} />
      }

    </Fragment>
  )
}