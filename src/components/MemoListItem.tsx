import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import { Link } from 'expo-router'
import { type Memo } from 'types/memo'
interface Props {
  memo: Memo
}
const MemoListItem = ({ memo }: Props): JSX.Element | null => {
  const { id, body, createdAt, updatedAt } = memo

  if (
    id === null ||
    body === null ||
    createdAt === null ||
    updatedAt === null
  ) {
    return null
  }

  const dateString = updatedAt.toDate().toLocaleString('ja-JP')

  return (
    <Link href='memo/detail' asChild>
      <TouchableOpacity style={Styles.memoListItem}>
        <View>
          <Text style={Styles.memoListItemTitle} numberOfLines={1}>
            {body}
          </Text>
          <Text style={Styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity>
          <Icon name='delete' size={24} color='#b0b0b0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
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
