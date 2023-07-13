/* eslint-disable react/prop-types */

import type { ReactNode } from 'react'
import { createContext, useState } from 'react'

import { data } from '../../utils/dataMocked'

type StoresProviderProps = {
  children: ReactNode
}

const StoresContext = createContext({})

const StoresProvider: React.FC<StoresProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>('')
  const [stores, setStores] = useState(data)

  const values = {
    text,
    stores,
    setStores,
    setText,
  }

  return (
    <StoresContext.Provider value={values}>{children}</StoresContext.Provider>
  )
}

export default StoresProvider
