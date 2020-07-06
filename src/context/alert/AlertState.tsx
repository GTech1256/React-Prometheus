import React, { useReducer } from 'react';

import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from '../actionTypes';


export const AlertState = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const show = (text: string, type = 'warning') => {
    // @ts-ignore
   dispatch({
      type: SHOW_ALERT,
      payload: { text, type }
    })

    if (type === 'success') {
      setTimeout(hide, 3000)
    }
  }

  // @ts-ignore
  const hide = () => dispatch({ type: HIDE_ALERT })


  return (
    // @ts-ignore
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  )
}