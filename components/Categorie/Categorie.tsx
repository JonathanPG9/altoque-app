import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'

type CategorieProps = {
  type: string
  label: string
  icon: any
  selectedType: string
  handlePressAction: () => void
}

const Categorie: React.FC<CategorieProps> = ({
  type,
  label,
  icon,
  selectedType,
  handlePressAction,
}) => (
  <TouchableOpacity onPress={handlePressAction}>
    <View style={styles.categorie}>
      <Avatar.Image
        style={
          selectedType === type
            ? styles.categorieImgPressed
            : styles.categorieImg
        }
        source={icon}
        size={46}
      />
      <Text>{label}</Text>
    </View>
  </TouchableOpacity>
)

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
  },
  categorieImgPressed: {
    backgroundColor: 'red',
  },
})
