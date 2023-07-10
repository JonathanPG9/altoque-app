import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'

type CategorieProps = {
  type: string
  label: string
  icon: any
}

const Categorie: React.FC<CategorieProps> = ({ type, label, icon }) => {
  return (
    <View style={styles.categorie}>
      <Avatar.Image style={styles.categorieImg} source={icon} size={46} />
      <Text>{label}</Text>
    </View>
  )
}

export default Categorie

const styles = StyleSheet.create({
  categorie: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  categorieImg: {
    backgroundColor: 'white',
    resizeMode: 'cover',
  },
})
