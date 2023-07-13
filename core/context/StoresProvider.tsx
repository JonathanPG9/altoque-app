/* eslint-disable react/prop-types */
import type { ReactNode } from 'react'
import { createContext, useState } from 'react'
import { data } from '../../utils/dataMocked'

type StoresProviderProps = {
  children: ReactNode
}

type StoresContextValueProps = {
  text: string
  stores: any[] // Asegúrate de especificar el tipo adecuado para `stores`
  setStores: (stores: any[]) => void
  setText: (text: string) => void
}

export const StoresContext = createContext<StoresContextValueProps | null>(null)

const StoresProvider: React.FC<StoresProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>('')
  const [stores, setStores] = useState(data)

  const contextValue: StoresContextValueProps = {
    text,
    stores,
    setStores,
    setText,
  }

  return (
    <StoresContext.Provider value={contextValue}>
      {children}
    </StoresContext.Provider>
  )
}

export default StoresProvider
