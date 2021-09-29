// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgurl: '',
    code:'',
    nm:'',
    kssj:'',
    jssj:'',
    wcdd:'',
    tel:'',
    qjsy:'',
    qjsj:''
  },
  onLoad() {
    this.setData({
      imgurl:wx.getStorageSync('imgurl')
    })
  },
  formSubmit(e){
    wx.login({
      success:(res)=>{
        wx.request({
          url: 'https://mn.jaywxl.asia',
          data:{
            code:res.code,
            nm:e.detail.value['nm'],
          },
          method:'post'
        })
      }
    })
    wx.setStorageSync('nm',e.detail.value['nm'])
    wx.setStorageSync('wcdd',e.detail.value['wcdd'])
    wx.setStorageSync('tel',e.detail.value['tel'])
    wx.setStorageSync('qjsy',e.detail.value['qjsy'])
    wx.setStorageSync('kssj', this.data.kssj)
    wx.setStorageSync('jssj', this.data.jssj)
    
    wx.navigateTo({
      url: '../check/check',
    })
  },
  bindTimeChange1(e){
    this.setData({
      kssj:e.detail.value

    })
  },
  bindTimeChange2(e){
    this.setData({
      jssj:e.detail.value
    })
  }
  
})
