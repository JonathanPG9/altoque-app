import React from 'react'
import Search from '../Search/Search'
import Stores from '../Stores/Stores'
import { View, StyleSheet } from 'react-native'

const MainContainer: React.FC = () => {
  const [text, setText] = React.useState<string>('')
  return (
    <View style={styles.main}>
      <Search text={text} setText={setText} />
      <Stores text={text} />
    </View>
  )
}

export default MainContainer

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
})
