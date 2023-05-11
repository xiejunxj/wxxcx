// pages/movie/more-movie/more-movie.js
var app = getApp();
Page({

    /**
     * Page initial data
     */
    data: {
        movies:[],
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        var category = options.category;
        var dataUrl = "";
        switch (category) {
            case "正在热映":
                dataUrl = app.globalData.maoyanBase + "movieOnInfoList";
                break;
            case "即将上映":
                dataUrl = app.globalData.maoyanBase + "comingList?ci=57&token=";
                break;
            case "非常想看":
                dataUrl = app.globalData.maoyanBase + "mostExpected?ci=57&offset=0&token=";
                break;
        }
        var that = this;
        wx.request({
          url: dataUrl,
          method: "GET",
          header:{
              "content-type":"json"
          },
          success: function(res) {
            that.processMaoyanData(res.data, category)
          },
          fail:function(error) {
              console.log(error + " " + category + " url is " + dataUrl);
          }
        })
    },
    onMovieTap(event) {
        var movieId = event.currentTarget.dataset.movieId;
        wx.navigateTo({
          url: '../movie-detail/movie-detail?id=' + movieId
        })
    },
    processInTheaterRes(moviesMaoyan, movies) {
        for (var idx in moviesMaoyan.movieList) {
            var subject = moviesMaoyan.movieList[idx];
            var title = subject.nm;
            if (title.length >= 6) {
                title = title.substring(0,6) + "...";
            }
            var temp = {
                star: subject.sc,
                title:title,
                coverageUrl: subject.img,
                movieId: subject.id
            }
            if (temp.star === 0) {
                temp.star = "暂无评分"
            }
            movies.push(temp)
        }
    },
    processCommingSoonRes(moviesMaoyan, movies) {
        for (var idx in moviesMaoyan.coming) {
            var subject = moviesMaoyan.coming[idx];
            var title = subject.nm;
            if (title.length > 6) {
                title = title.substring(0,6) + "...";
            }
            var temp = {
                star: subject.sc,
                title:title,
                coverageUrl: subject.img,
                movieId: subject.id
            }
            if (temp.star === 0) {
                temp.star = "暂无评分"
            }
            movies.push(temp)
        }
    },
    processMostWantRes(moviesMaoyan, movies) {
        for (var idx in moviesMaoyan.coming) {
            var subject = moviesMaoyan.coming[idx];
            var title = subject.nm;
            if (title.length >= 6) {
                title = title.substring(0,6) + "...";
            }
            var temp = {
                star: 0,
                title:title,
                coverageUrl: subject.img,
                movieId: subject.id
            }
            if (temp.star === 0) {
                temp.star = "暂无评分"
            }
            movies.push(temp)
        }
    },
    processMaoyanData(moviesMaoyan, category) {
        var movies = [];
        if (category == "正在热映") {
            this.processInTheaterRes(moviesMaoyan, movies)
        } else if (category == "即将上映") {
            this.processCommingSoonRes(moviesMaoyan, movies)
        } else  {
            this.processMostWantRes(moviesMaoyan, movies)
        }
        this.setData({
            movies: movies
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