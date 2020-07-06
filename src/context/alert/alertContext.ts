import { createContext } from 'react';

import { StateType } from './types'

export const AlertContext = createContext<StateType>({ visible: false })