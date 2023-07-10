import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Categorie: React.FC = () => {
  return (
    <View>
      <Image
        style={styles.categorieImg}
        source={require('../../assets/bakery.png')}
      />
      <Text>Ho la</Text>
    </View>
  )
}

export default Categorie

const styles = StyleSheet.create({
  categorieImg: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
})
