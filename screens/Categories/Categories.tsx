import React from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'

type CategoriesProps = {
  text: string
}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.categories}>
        <Text>hola</Text>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: 'red',
  },
  categories: {
    flex: 1,
  },
})
