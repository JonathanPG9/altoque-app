import { useContext } from 'react'
import { StoresContext } from '../core/contexts/StoresProvider'

const useStoresProvider = () => {
  const contextValue = useContext(StoresContext)

  if (!contextValue) {
    throw new Error(
      'useStoresProvider debe ser utilizado dentro de un StoresProvider'
    )
  }

  return contextValue
}

export default useStoresProvider
