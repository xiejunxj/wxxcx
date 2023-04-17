// pages/post/post.js
//var DBPost = require("../../db/DBPost.js").DBPost;

import {DBPost} from '../../db/DBPost.js'
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

    onTapToDetail: function(event) {
        var postId = event.currentTarget.dataset.postId;
        console.log("postId is " + postId);
        wx.navigateTo({
          url: 'post-detail/post-detail?id=' + postId,
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
    onCommentTap(event) {
        var id = event.currentTarget.dataset.postId;
        wx.navigateTo({
          url: '../post-comment/post-comment?id=' + id,
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