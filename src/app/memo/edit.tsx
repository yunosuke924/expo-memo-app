import { View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import CircleButton from '@/components/CircleButton'
import Icon from '@/components/Icon'
import { router } from 'expo-router'

const hadleOnPress = (): void => {
  router.back()
}

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          value={'買い物リスト\n買い物リスト'}
          style={styles.input}
        />
      </View>
      <CircleButton onPress={hadleOnPress}>
        <Icon name='check' size={40} color='#fff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Edit
