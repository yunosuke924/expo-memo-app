import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'
const MemoListItem = (): JSX.Element => {
  return (
    <View style={Styles.memoListItem}>
      <View>
        <Text style={Styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={Styles.memoListItemDate}>2024年2月20日</Text>
      </View>
      <TouchableOpacity>
        <Icon name='delete' size={24} color='#b0b0b0' />
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
