import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  label: string
}

const Button = ({ label }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonTitle}>{label}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467fd3',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center'
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18
  }
})

export default Button
