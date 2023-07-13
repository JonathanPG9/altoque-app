import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import Store from '../../components/Store/Store'

type StoresProps = {
  text: string
}

const Stores: React.FC<StoresProps> = ({ text }) => {
  const [stores, setStores] = useState(data)

  const filterStores = (storeEvent) => {
    const storesFiltered = stores?.filter(
      (store) => store.foodCategory === text
    )
    console.log(storesFiltered)
  }

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
