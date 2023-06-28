// pages/tool/tool.js
Page({

    /**
     * Page initial data
     */
    data: {
        cache:[
            {"iconurl":"/images/icon/wx_app_clear.png", "title":"缓存清理", "tap":"clearCache"}
        ],
        api: [
            {"iconurl":"/images/icon/wx_app_list.png", "title":"文件查看", "tap":"showFile"}
        ]
    },
    showModal: function(title, content, callback) {
        wx.showModal({
          title: title,
          content: content,
          confirmColor:'#1F4BA5',
          cancelColor: '#7F8389',
          complete: (res) => {
            if (res.cancel) {
            }
            if (res.confirm) {
              callback && callback()
            }
          }
        })
    },
    clearCache() {
        this.showModal("缓存清理", "确定要清除本地缓存吗？", function(){
            wx.clearStorage({
                success:function(msg) {
                    wx.showToast({
                      title: '缓存清理成功',
                      duration: 1000,
                      mask:true,
                      icon:"success"
                    })
                },
                fail:function(e) {
                    console.log(e)
                }
            })
        })
    },
    showFile() {
        wx.navigateTo({
            url: 'pdf/pdf',
            success:function() {
              console.log("jump success")
            },
            fail:function() {
              console.log("jump fail")
            },
            complete:function() {
              console.log("jump complete") 
            }
          })
    },
    /** 
    showFile2() {
        wx.downloadFile({
            url: 'https://test-jpfile1.oss-cn-shenzhen.aliyuncs.com/Bom/bom/2022/1/19/2022011911355693652034.PDF',
            success: function (res) {                           
              console.log(res);
              if (res.statusCode === 200) {
                var Path = res.tempFilePath
                wx.openDocument({
                  filePath: Path, 
                  fileType: 'pdf',
                  success: function (res) {
                    console.log('打开PDF成功');
                  },
                  fail: function(res) {
                      console.log(res)
                  }
                })
              }
            },
            fail: function (res) {
              console.log(res);
            }
        })
    },
    */
    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {

    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow() {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage() {

    }
})