import { useContext } from 'react'
import { StoresContext } from '../core/context/StoresProvider'

const useStoresProvider = () => {
  const contextValue = useContext(StoresContext)

  if (!contextValue) {
    throw new Error('useStores debe ser utilizado dentro de un StoresProvider')
  }

  return contextValue
}

export default useStoresProvider
