// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'taro-715oa'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const _ = db.command
  db.collection('all').doc('8a6c3bf65f422cba0021b9787df8dd1a').update({
    data: {
      likeTimes: _.inc(1),
    }
  })

  return {
    openid: wxContext.OPENID,
  }
}