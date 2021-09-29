// pages/home/home.js
Page({
    data: {
        imgurl:'',
        hasUserInfo:false,
    },
    getUserProfile(){
        wx.getUserProfile({
            desc: '获取头像信息',
            success:(res) => {
                this.setData({
                    imgurl: res.userInfo.avatarUrl,
                    hasUserInfo: true,
                })
                wx.navigateTo({
                  url: '../index/index',
                })
            }
        })
    },
    onHide :function(){
        wx.setStorageSync('imgurl', this.data.imgurl)
        console.log(this.data.imgurl)
    }
})