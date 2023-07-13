import { useState } from 'react'
import Categorie from '../../components/Categorie/Categorie'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import useStoresProvider from '../../hooks/useStoresProvider'
import { CATEGORIES } from '../../utils/dataMocked'

const Categories: React.FC = () => {
  const { defaultStores, setStores } = useStoresProvider()
  const [selectedType, setSelectedType] = useState<string>('')

  const handlePressAction = (type: string) => {
    if (selectedType === type) {
      setSelectedType('')
      setStores(defaultStores)
      return
    }
    setSelectedType(type)
    const storesFiltered = defaultStores.filter(
      (store) => store.storeType === type
    )
    setStores(storesFiltered)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="titleLarge">
        Categorias
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((categorie) => (
          <Categorie
            key={categorie.id}
            type={categorie.type}
            label={categorie.label}
            icon={categorie.icon}
            selectedType={selectedType}
            handlePressAction={() => handlePressAction(categorie.type)}
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
