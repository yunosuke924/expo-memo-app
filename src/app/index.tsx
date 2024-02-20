import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={Styles.constainer}>
      {/* ヘッダー */}
      <View style={Styles.header}>
        <View style={Styles.headerInner}>
          <Text style={Styles.headerTitle}>メモ管理アプリ</Text>
          <Text style={Styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      {/* 買い物リスト */}
      <View>
        <View style={Styles.memoListItem}>
          <View>
            <Text style={Styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={Styles.memoListItemDate}>2024年2月20日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={Styles.memoListItem}>
          <View>
            <Text style={Styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={Styles.memoListItemDate}>2024年2月20日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={Styles.memoListItem}>
          <View>
            <Text style={Styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={Styles.memoListItemDate}>2024年2月20日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={Styles.memoListItem}>
          <View>
            <Text style={Styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={Styles.memoListItemDate}>2024年2月20日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* 追加ボタン */}
      <View style={Styles.circleButton}>
        <Text style={Styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  constainer: {
    flex: 1, // 画面いっぱいに広げる
    backgroundColor: '#fffff'
  },
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
  },
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
  },
  circleButton: {
    width: 64,
    height: 64,
    backgroundColor: '#467FD3',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // 以下は影の設定だけどiOSのみ
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    // 以下はAndroidのみ
    elevation: 8 // elevationはGoogle Material Designの層の高さの設定
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40
  }
})

export default Index
