import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

type StoreProps = {
  title: string
  phoneNumber: string
  descripcion: string
}

const Store: React.FC<StoreProps> = ({ title, descripcion, phoneNumber }) => (
  <Card style={styles.store} mode={'contained'}>
    <Card.Cover
      style={styles.storeImg}
      source={{ uri: 'https://picsum.photos/700' }}
      theme={{
        roundness: 4,
        isV3: false,
      }}
    />
    <Card.Title title={title} subtitle={phoneNumber} />
    <Card.Content>
      <Text>{descripcion}</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Llamar</Button>
      <Button>Ver mas...</Button>
    </Card.Actions>
  </Card>
)

const styles = StyleSheet.create({
  store: {
    margin: 5,
    width: 255,
  },
  storeImg: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },
})

export default Store
