import React from 'react'
import Categorie from '../../components/Categorie/Categorie'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

type CategoriesProps = {
  text: string
}

const CATEGORIES = [
  {
    id: 0,
    type: 'bakery',
    label: 'Panaderias',
    icon: require(`../../assets/bakery.png`),
  },
  {
    id: 1,
    type: 'Resto',
    label: 'Comidas',
    icon: require(`../../assets/fried-rice.png`),
  },
  {
    id: 2,
    type: 'burgers',
    label: 'Burgers',
    icon: require(`../../assets/burger.png`),
  },
  {
    id: 3,
    type: 'pizza',
    label: 'Pizza',
    icon: require(`../../assets/pizza.png`),
  },
  {
    id: 4,
    type: 'burgers',
    label: 'Burgers',
    icon: require(`../../assets/burger.png`),
  },
  {
    id: 5,
    type: 'pizza',
    label: 'Pizza',
    icon: require(`../../assets/pizza.png`),
  },
  {
    id: 6,
    type: 'burgers',
    label: 'Burgers',
    icon: require(`../../assets/burger.png`),
  },
  {
    id: 7,
    type: 'pizza',
    label: 'Pizza',
    icon: require(`../../assets/pizza.png`),
  },
]

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="titleLarge">
        Categorias
      </Text>
      <ScrollView horizontal>
        {CATEGORIES.map((categorie) => (
          <Categorie
            key={categorie.id}
            type={categorie.type}
            label={categorie.label}
            icon={categorie.icon}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  title: {
    marginLeft: 9,
    marginBottom: 5,
  },
})
