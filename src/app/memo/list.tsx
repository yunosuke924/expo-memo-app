import { View, StyleSheet } from 'react-native'
import Header from '@/components/Header'
import MemoListItem from '@/components/MemoListItem'
import CircleButton from '@/components/CircleButton'
import Icon from '@/components/Icon'

const List = (): JSX.Element => {
  return (
    <View style={Styles.constainer}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>
        <Icon name='plus' size={40} color='red'/>
      </CircleButton>
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
