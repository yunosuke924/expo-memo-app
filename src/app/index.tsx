import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View>
      <Text style={Styles.text}>hello</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  text: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 40,
    padding: 8
  }
})

export default Index
