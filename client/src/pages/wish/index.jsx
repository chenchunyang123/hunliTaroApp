import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'

function Wish() {
  const [imgList, setImgList] = useState([])

  useEffect(() => {
    // 相册
    Taro.cloud.callFunction({
      name: 'getWeddingPhotos',
    }).then(data => {
      const { result } = data
      console.log(result)
      setImgList(result)
    })
  }, [])

  return (
    <View className="w_wrap">
      <Swiper className="w_swiper" duration="400">
        {
          imgList.map(item => {
            return (
              <SwiperItem key={item._id}>
                {/* 蒙版 */}
                {/* <Image className="w_swiperItem" src={item.url} lazyLoad></Image> */}
                {/* 真实的图片 */}
                <Image src={item.url} mode="aspectFit" lazyLoad />
              </SwiperItem>
            )
          })
        }
      </Swiper>
    </View>
  )
}

export default Wish