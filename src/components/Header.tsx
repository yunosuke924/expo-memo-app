import { View, Text, StyleSheet } from 'react-native'
const Header = (): JSX.Element => {
  return (
    <View style={Styles.header}>
      <View style={Styles.headerInner}>
        <Text style={Styles.headerTitle}>メモ管理アプリ</Text>
        <Text style={Styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default Header
