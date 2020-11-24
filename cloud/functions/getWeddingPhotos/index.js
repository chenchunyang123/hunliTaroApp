// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'taro-715oa'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const allCol = db.collection('weddingPhotos')
  const result = await allCol.get();
  return result.data;
}