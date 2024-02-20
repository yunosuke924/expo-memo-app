import { Redirect } from 'expo-router'

const Index = (): JSX.Element => {
  // メモ一覧画面にリダイレクト
  return <Redirect href='memo/detail' />
}

export default Index
