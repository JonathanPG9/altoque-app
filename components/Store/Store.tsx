import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

type StoreProps = {
  title: string
  phoneNumber: string
  descripcion: string
}

const Store: React.FC<StoreProps> = ({ title, descripcion, phoneNumber }) => (
  <Card style={styles.store} elevation={5}>
    <Card.Title style={styles.storeImg} title={title} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text>{descripcion}</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
)

const styles = StyleSheet.create({
  store: {
    margin: 6,
    width: 255,
  },
  storeImg: {
    borderRadius: 0,
    borderTopLeftRadius: 0,
  },
})

export default Store
