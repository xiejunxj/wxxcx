import {DBPost} from '../../../db/DBPost.js'
var app = getApp();
console.log(app);
Page({

    /**
     * Page initial data
     */
    data: {
        isPlayingMusic:false
    },
    initMusicStatus() {
        this.setData({
            isPlayingMusic: app.globalData.isPlayingMusic
        })
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
        });
        this.addReadingTimes();
        this.setMusicMonitor();
        this.initMusicStatus();
    },
    setMusicMonitor() {
        var that = this;
        wx.getBackgroundAudioManager().onEnded(function() {
            console.log("music is done");
            that.setData({isPlayingMusic:false})
            app.globalData.isPlayingMusic = false;
        });
        wx.getBackgroundAudioManager().onPlay(function(){
            that.setData({isPlayingMusic:true});
            app.globalData.isPlayingMusic = true;
        });
        wx.getBackgroundAudioManager().onPause(
            function() {
                that.setData({isPlayingMusic:false});
                app.globalData.isPlayingMusic = false;
            }
        );
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
    onMusicTap(event) {
        if (this.data.isPlayingMusic) {
            wx.getBackgroundAudioManager().pause();
            this.setData({isPlayingMusic:false});
            app.globalData.isPlayingMusic = false;
        } else {
            wx.getBackgroundAudioManager().src = 'http://124.221.215.40/yujian.mp3';
            wx.getBackgroundAudioManager().coverImgUrl = 'http://124.221.215.40/yujian.png';
            wx.getBackgroundAudioManager().title = '遇见';
            wx.getBackgroundAudioManager().play(),
            this.setData(
                {isPlayingMusic:true}
            );
            app.globalData.isPlayingMusic = true;
        }
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

    addReadingTimes() {
        this.dbPost.addReadingTimes();
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
        return {
            title: this.postData.title,
            desc: this.postData.content,
            path: '/pages/post/post-detail/post-detail'
        }
    }
})