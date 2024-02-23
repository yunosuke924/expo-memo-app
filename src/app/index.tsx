import { Redirect } from 'expo-router'

const Index = (): JSX.Element => {
  // メモ一覧画面にリダイレクト
  return <Redirect href='auth/log_in' />
}

export default Index
