import React from 'react'
import Search from '../Search/Search'
import Stores from '../Stores/Stores'

const MainContainer: React.FC = () => {
  const [text, setText] = React.useState<string>('')
  return (
    <>
      <Search text={text} setText={setText} />
      <Stores text={text} />
    </>
  )
}

export default MainContainer
