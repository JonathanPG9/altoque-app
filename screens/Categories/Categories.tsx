import React from 'react'
import Categorie from '../../components/Categorie/Categorie'
import { ScrollView, StyleSheet, View } from 'react-native'

type CategoriesProps = {
  text: string
}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.categories}>
        <Categorie />
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  categories: {
    flex: 1,
  },
})
