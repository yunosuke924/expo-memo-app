import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Hello } from './src/components/Hello'

export default function App():JSX.Element {
  return (
    <View style={styles.container}>
      <Text>簡単なメモアプリ</Text>
      <Hello />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
