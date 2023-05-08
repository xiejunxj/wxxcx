import {DBPost} from '../../../db/DBPost.js';

// pages/post/post-comment/post-comment.js
Page({

    /**
     * Page initial data
     */
    data: {
        useKeyboardFlag: false,
        wxAppKeyboardIcon: "http://124.221.215.40/icon/wx_app_keyboard.png",
        wxAppAddIcon:"http://124.221.215.40/icon/wx_app_add.png",
        keyboardInputValue:"",
        avatar: "http://124.221.215.40/avatar/icon5.jpg"
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        var postId = options.id;
        this.dbPost = new DBPost(postId)
        var comments = this.dbPost.getCommentData();
        this.setData({
            comments: comments
        })
    },
    switchInputType(event) {
        this.setData({
            useKeyboardFlag: !this.data.useKeyboardFlag
        })
    },
    bindCommentInput(event) {
      var val = event.detail.value;
      this.data.keyboardInputValue = val;  
    },
    submitComment(event) {
        var newData = {
            username:"青石",
            avatar: this.data.avatar,
            content: {
                txt: this.data.keyboardInputValue
            },
            create_time: new Date().getTime()/1000
        };
        console.log(newData);
        if (!newData.content.txt) {
            return;
        }
        this.dbPost.newComment(newData);
        this.showCommitSuccessToast();
        this.bindCommentData();
        this.resetAllDefaultStatus();
    },
    showCommitSuccessToast() {
        wx.showToast({
          title: '评论成功',
          duration: 1000,
          icon: 'success'
        })
    },
    bindCommentData() {
        var comments = this.dbPost.getCommentData();
        console.log(comments);
        this.setData({
            comments: comments
        })
    },
    resetAllDefaultStatus() {
        this.setData({
            keyboardInputValue:""
        });
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