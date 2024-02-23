import { Text, View, StyleSheet } from 'react-native'
import MemoListItem from '@/components/MemoListItem'
import CircleButton from '@/components/CircleButton'
import Icon from '@/components/Icon'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '@/components/LogoutButton'

const onPress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])
  return (
    <View style={Styles.constainer}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton onPress={onPress}>
        <Icon name='plus' size={40} color='#fff' />
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
