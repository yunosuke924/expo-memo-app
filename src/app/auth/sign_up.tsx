import Button from '@/components/Button'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Link, router } from 'expo-router'

const handleOnPress = (): void => {
  // TODO:ログイン処理を行う
  router.push('/memo/list')
}

const Login = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>新規登録</Text>
        <TextInput style={styles.input} value='メールアドレス' />
        <TextInput style={styles.input} value='パスワード' />
        <Button label='新規登録' onPress={handleOnPress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>アカウントをお持ちの方は</Text>
          <Link href='/auth/log_in' asChild>
            <TouchableOpacity>
              <Text style={styles.footerTextLink}>こちら</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 32
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24
  },
  footerTextLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3'
  }
})

export default Login
