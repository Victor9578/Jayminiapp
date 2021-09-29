// pages/check/check.js
import utils from '../../utils/util'
Page({
    data: {
        nm:'',
        bh:'',
        kssj:'',
        jssj:'',
        wcdd:'',
        tel:'',
        qjsy:'',
        qjsj:'',

    },

    onLoad: function (options) {
        this.setData({
            bh:'865598940433'+parseInt((Math.random()*9+1)*100000),
            nm:wx.getStorageSync('nm'),
            wcdd:wx.getStorageSync('wcdd'),
            tel:wx.getStorageSync('tel'),
            qjsy:wx.getStorageSync('qjsy'),
            kssj:utils.formatTime(new Date())+' '+wx.getStorageSync('kssj'),
            jssj:utils.formatTime(new Date())+' '+wx.getStorageSync('jssj'),
            qjsj:utils.formatTime2(new Date())+' 12:43'
        })
    }

    
})