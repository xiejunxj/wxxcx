// pages/post/post.js
var DBPost = require("../../db/DBPost.js").DBPost;
Page({
    data: {
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function() {
        var dbPost = new DBPost();
        this.setData({
            postList: dbPost.getAllPostData()
        })
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
        console.log("hide");
    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload() {
        console.log("unload");
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