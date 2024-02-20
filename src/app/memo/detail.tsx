import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from '@/components/Header'
import CircleButton from '@/components/CircleButton'
const Detail = (): JSX.Element => {
  return (
    <View>
      <Header />
      <View>
        <View>
          <Text>買い物リスト</Text>
          <Text>2024年2月20日</Text>
        </View>
        <ScrollView>
          <Text>
            買い物リスト 書体やレイアウトなどを確認するために文章を入力します。
            買い物リスト 書体やレイアウトなどを確認するために文章を入力します。
            買い物リスト 書体やレイアウトなどを確認するために文章を入力します。
            買い物リスト 書体やレイアウトなどを確認するために文章を入力します。
            買い物リスト 書体やレイアウトなどを確認するために文章を入力します。
            買い物リスト 書体やレイアウトなどを確認するために文章を入力します。
            買い物リスト 書体やレイアウトなどを確認するために文章を入力します。
            買い物リスト 書体やレイアウトなどを確認するために文章を入力します。
          </Text>
        </ScrollView>
      </View>
      <CircleButton>+</CircleButton>
    </View>
  )
}

export default Detail
