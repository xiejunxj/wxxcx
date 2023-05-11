// pages/movie/movie-detail/movie-detail.js
var app = getApp()
Page({

    /**
     * Page initial data
     */
    data: {
        movie:{}
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        console.log(options)
        var movieId = options.id;
        var url = app.globalData.maoyanBase +"detailmovie?movieId=" + movieId;
        var that = this;
        wx.request({
          url: url,
          method: "GET",
          header:{
              "content-type":"json"
          },
          success: function(res) {
            that.processMaoyanData(res.data)
          },
          fail:function(error) {
              console.log(error);
          }
        })
    },
    processMaoyanData(data) {
        if (!data) return;
        if (!data.detailMovie) return;
        var movie = {
            headImg:data.detailMovie.img,
            country:data.detailMovie.src,
            rt:data.detailMovie.rt,
            wishCount:data.detailMovie.wish,
            loveCount:data.detailMovie.watched,
            director:data.detailMovie.dir,
            casts:data.detailMovie.star,
            cat:data.detailMovie.cat,
            summary:data.detailMovie.dra,
            title:data.detailMovie.nm,
        }
        console.log(movie)
        this.setData(
            {
                movie:movie
            }
        )
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