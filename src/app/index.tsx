import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={Styles.constainer}>
      {/* ヘッダー */}
      <View>
        <View>
          <Text style={Styles.text}>hello</Text>
        </View>
        <View>
          <Text>ログアウト</Text>
        </View>
      </View>

      {/* 買い物リスト */}
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年2月20日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年2月20日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* 追加ボタン */}
      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 40,
    padding: 8
  }
})

export default Index
