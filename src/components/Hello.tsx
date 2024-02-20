import { View, Text, StyleSheet } from 'react-native'

export const Hello = (): JSX.Element => (
  <View>
    <Text style={Styles.text}>hello</Text>
  </View>
)

const Styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 40,
    padding: 8
  }
})
