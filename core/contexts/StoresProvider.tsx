import type { ReactNode } from 'react'
import { createContext, useState } from 'react'
import { data } from '../../utils/dataMocked'
import PropTypes from 'prop-types'

type StoresProviderProps = {
  children: ReactNode
}

type StoresContextValueProps = {
  defaultStores: any[]
  text: string
  stores: any[]
  setStores: (stores: any[]) => void
  setText: (text: string) => void
}

export const StoresContext = createContext<StoresContextValueProps | null>(null)

const StoresProvider: React.FC<StoresProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>('')
  const [stores, setStores] = useState(data)

  const contextValue: StoresContextValueProps = {
    defaultStores: data,
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

StoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoresProvider
