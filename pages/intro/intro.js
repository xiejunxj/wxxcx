Page({
    onTapJump: function(event) {
        wx.switchTab({
            url: '../myself/myself',
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
    onUnload: function() {
        console.log("unload")
    },
    onHide: function(){
        console.log("hide")
    }
})