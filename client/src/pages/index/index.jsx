import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

function Index() {

  const gotoVideo = () => {
    Taro.navigateTo({
      url: '../video/index'
    })
  }

  const gotoWish = () => {
    Taro.navigateTo({
      url: '../wish/index'
    })
  }

  return (
    <View className='i_wrap'>
      <View className='i_btnWrap'>
        <View className='i_btn' onClick={gotoWish}>
          <Text space='emsp'>祝  福</Text>
        </View>
        <View className='i_btn' onClick={gotoVideo}>
          <Text space='emsp'>视  频</Text>
        </View>
        {/* <View className='i_btn'>
          <Text space='emsp'>抽  奖</Text>
        </View> */}
      </View>
    </View>
  )
}

export default Index