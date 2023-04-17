// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    wx.clearStorageSync();
    var storageData = wx.getStorageSync('postList');
    if (!storageData) {
        var dataObj = require("data/data.js");
        wx.clearStorageSync();
        wx.setStorageSync('postList', dataObj.postList);
    }
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})
