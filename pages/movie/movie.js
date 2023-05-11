var util = require("../../utils/util.js");

// pages/movie/movie.js
var app = getApp();
Page({

    /**
     * Page initial data
     */
    data: {
        inTheaters: {},
        comingSoon: {},
        top250: {}
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        var inTheatersUrl = app.globalData.maoyanBase + "movieOnInfoList";
        var comingSoonUrl = app.globalData.maoyanBase + "comingList?ci=57&token=&limit=3";
        var mostWantUrl = app.globalData.maoyanBase + "mostExpected?ci=57&limit=3&offset=0&token=";
        this.getMovieData(mostWantUrl, "mostWant", "非常想看");
        this.getMovieData(inTheatersUrl, "inTheaters", "正在热映");
        this.getMovieData(comingSoonUrl, "comingSoon", "即将上映");
    },
    onMoreTap(event) {
        var category = event.currentTarget.dataset.category;
        wx.navigateTo({
          url: 'more-movie/more-movie?category=' + category
        })
    },
    onMovieTap(event) {
        var movieId = event.currentTarget.dataset.movieId;
        wx.navigateTo({
          url: 'movie-detail/movie-detail?id=' + movieId
        })
    },
    processInTheaterRes(moviesMaoyan, movies) {
        var i = 0;
        for (var idx in moviesMaoyan.movieList) {
            i = i + 1;
            if (i === 4) {
                break;
            }
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
        var i = 0;
        for (var idx in moviesMaoyan.coming) {
            i = i + 1;
            if (i === 4) {
                break;
            }
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
        var i = 0;
        for (var idx in moviesMaoyan.coming) {
            i = i + 1;
            if (i === 4) {
                break;
            }
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
    processMaoyanData(moviesMaoyan, settedKey, categoryTitle) {
        var movies = [];
        if (settedKey == "inTheaters") {
            this.processInTheaterRes(moviesMaoyan, movies)
        } else if (settedKey == "comingSoon") {
            this.processCommingSoonRes(moviesMaoyan, movies)
        } else  {
            this.processMostWantRes(moviesMaoyan, movies)
        }
        var readyData = {}
        readyData[settedKey] = {
            categoryTitle: categoryTitle,
            movies: movies
        }
        this.setData(readyData)
    },
    getMovieData(url, settedKey, categoryTitle) {
        var that = this;
        wx.request({
          url: url,
          method: "GET",
          header:{
              "content-type":"json"
          },
          success: function(res) {
            that.processMaoyanData(res.data, settedKey, categoryTitle)
          },
          fail:function(error) {
              console.log(error);
          }
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