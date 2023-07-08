import React from 'react'
import { View, Text } from 'react-native'

type StoresProps = {
  text: string
}

const Stores: React.FC<StoresProps> = ({ text }) => {
  return (
    <View>
      <Text>Stores</Text>
      <Text>{text}</Text>
    </View>
  )
}

export default Stores
