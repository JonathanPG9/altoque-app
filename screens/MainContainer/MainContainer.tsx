import React from 'react'
import Search from '../Search/Search'
import Stores from '../Stores/Stores'
import Categories from '../Categories/Categories'
import StoresProvider from '../../core/context/StoresProvider'

const MainContainer: React.FC = () => {
  return (
    <StoresProvider>
      <Search />
      <Categories />
      <Stores />
    </StoresProvider>
  )
}

export default MainContainer
