// imports
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

const Search: React.FC = () => {
  return (
    <View style={styles.search}>
      <Text style={styles.textTitle} variant="headlineSmall">
        Listo para buscar en el barrio?
      </Text>
      <TextInput
        mode="outlined"
        style={styles.inputItem}
        label="Busca tu local Altoque!"
        // value={text}
        // onChangeText={(text) => setText(text)}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  search: {
    flex: 0.35,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    marginTop: 33,
  },
  inputItem: {
    width: 300,
    marginTop: 5,
  },
})
