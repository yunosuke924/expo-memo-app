import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: React.ReactNode
}
const CircleButton = ({ children }: Props): JSX.Element => {
  return (
    <View style={Styles.circleButton}>
      <Text style={Styles.circleButtonLabel}>{children}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
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

export default CircleButton
