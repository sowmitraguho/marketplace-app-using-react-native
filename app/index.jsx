import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import React from 'react'
import { className } from 'twrnc'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>index</Text>
      <StatusBar style='auto'/>
    </View>
  )
}

export default index