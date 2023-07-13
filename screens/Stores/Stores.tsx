import { FlatList, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import Store from '../../components/Store/Store'

// hooks
import useStoresProvider from '../../hooks/useStoresProvider'

const Stores: React.FC = () => {
  const { stores } = useStoresProvider()

  return (
    <>
      <Text style={styles.title} variant="titleLarge">
        Locales
      </Text>
      <FlatList
        style={styles.stores}
        data={stores}
        renderItem={({ item }) => (
          <Store
            title={item.storeName}
            descripcion={item.descripcion}
            phoneNumber={item.phone}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        contentContainerStyle={styles.column}
      ></FlatList>
    </>
  )
}

export default Stores

const styles = StyleSheet.create({
  stores: {
    flex: 1,
  },
  column: {
    height: 100,
  },
  title: {
    margin: 10,
  },
})
