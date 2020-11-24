import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, Button, Video } from '@tarojs/components'
import './index.less'

function MyVideo() {
  const [videoVisible, setVisible] = useState(false)
  const [passWord, setPassWord] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  useEffect(() => {
    const videoContext = Taro.createVideoContext('myVideo')
    videoContext.requestFullScreen()
  }, [])

  const checkPassword = () => {
    Taro.showLoading({
      title: '翻找中...'
    });
    // 检查密码
    Taro.cloud.callFunction({
      name: 'getVideo'
    }).then(data => {
      const { result } = data //{passWord, videoUrl}
      const filterArr = result.filter(item => item.passWord === passWord) || []
      if (filterArr.length) {
        Taro.hideLoading()
        const { videoUrl } = filterArr[0]
        setVideoUrl(videoUrl)
        setVisible(true)
      } else {
        Taro.showToast({
          title: '亲，密码错误了，再试试吧~',
          icon: 'none'
        })
      }
    })
  }

  const onInput = (e) => {
    const { value } = e.detail
    setPassWord(value)
  }

  return (
    <View className='v_wrap'>
      {
        videoVisible ? (
          <Video id='myVideo' className='v_video' src={videoUrl} autoplay={true} direction={90} />
        ) : (
            <View className="v_password">
              <Input value={passWord} placeholder="快输入密码查看吧" onInput={onInput} />
              <Button bindtap="onHandleButton" onClick={checkPassword} >确认</Button>
            </View>
          )
      }
    </View>
  )
}

export default MyVideo