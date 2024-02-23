import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from '@/components/Header'
import CircleButton from '@/components/CircleButton'
const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>買い物リスト</Text>
          <Text style={styles.memoHeaderDate}>2024年2月20日</Text>
        </View>
        <ScrollView style={styles.memoBody}>
          <Text style={styles.memoBodyText}>
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
      <CircleButton style= {{ top: 160, bottom: 'auto' }}>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  memoHeader: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  memoHeaderDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#fff'
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000'
  }
})

export default Detail
