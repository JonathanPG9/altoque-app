// imports
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

type SearchProps = {
  text: string
  setText: (text: string) => void
}

const Search: React.FC<SearchProps> = ({ text, setText }) => {
  return (
    <View>
      <Text variant="headlineSmall">Listo para buscar en el barrio?</Text>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Busca tu local Altoque!"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  input: {
    width: '55%',
    borderRadius: 6,
  },
})
