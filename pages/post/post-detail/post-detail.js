import {DBPost} from '../../../db/DBPost.js'
Page({

    /**
     * Page initial data
     */
    data: {

    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        var postId = options.id;
        this.dbPost = new DBPost(postId);
        this.postData = this.dbPost.getPostItemById().data;
        this.setData({
            post: this.postData
        })
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady() {
        wx.setNavigationBarTitle({
            title: this.postData.title,
          })
    },
    onCollectionTap(event) {
        var newData = this.dbPost.collect();
        this.setData({
            'post.collectionNum': newData.collectionNum,
            'post.collectStatus': newData.collectStatus
        });
        wx.showToast({
          title: newData.collectStatus ? "收藏成功" : "取消成功",
          duration: 1000,
          icon: "success",
          mask: true
        })
    },
    onUpTap(event) {
        var newData = this.dbPost.up();
        this.setData({
            'post.upNum': newData.upNum,
            'post.upStatus': newData.upStatus
        });
        wx.showToast({
          title: newData.upStatus ? "点赞成功" : "取消成功",
          duration: 1000,
          icon: "success",
          mask: true
        })
    },
    onCommentTap(event) {
        var id = event.currentTarget.dataset.postId;
        wx.navigateTo({
          url: '../post-comment/post-comment?id=' + id
        })
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