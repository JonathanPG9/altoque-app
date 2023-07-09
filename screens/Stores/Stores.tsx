import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Store from '../../components/Store/Store'

type StoresProps = {
  text: string
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    descripcion:
      'testLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tortor vitae nulla dictum commodo. Phasellus fringilla tristique ipsum',
    phoneNumber: '12533123',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    descripcion:
      'testLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tortor vitae nulla dictum commodo. Phasellus fringilla tristique ipsum',
    phoneNumber: '12533123',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    descripcion:
      'testLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tortor vitae nulla dictum commodo. Phasellus fringilla tristique ipsum',
    phoneNumber: '12533123',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb238ba',
    title: 'First Item',
    descripcion:
      'testLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tortor vitae nulla dictum commodo. Phasellus fringilla tristique ipsum',
    phoneNumber: '12533123',
  },
]

const Stores: React.FC<StoresProps> = ({ text }) => {
  return (
    <FlatList
      style={styles.stores}
      data={DATA}
      renderItem={({ item }) => (
        <Store
          title={item.title}
          descripcion={item.descripcion}
          phoneNumber={item.phoneNumber}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={styles.columnWrapper}
    ></FlatList>
  )
}

export default Stores

const styles = StyleSheet.create({
  stores: {},
  columnWrapper: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
  },
})
