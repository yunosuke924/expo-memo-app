import { View, StyleSheet } from 'react-native'
import Header from '@/components/Header'
import MemoListItem from '@/components/MemoListItem'
import CircleButton from '@/components/CircleButton'
const List = (): JSX.Element => {
  return (
    <View style={Styles.constainer}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>+</CircleButton>
    </View>
  )
}

const Styles = StyleSheet.create({
  constainer: {
    flex: 1, // 画面いっぱいに広げる
    backgroundColor: '#fffff'
  }
})

export default List
