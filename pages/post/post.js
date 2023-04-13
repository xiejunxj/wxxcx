// pages/post/post.js
Page({
    data: {
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function() {
        var postList = [{
            date: "April 13 2023",
            title: "明亮的彩虹",
            postImg:"http://124.221.215.40/avatar/icon5.jpg",
            avatar: "http://124.221.215.40/avatar/icon5.jpg",
            content:"美丽的彩虹千千万万，只有这道彩虹独一无二",
            readingNum: 92,
            collectionNum: {
                array:[108]
            },
            commentNum: 7
        },{
            date: "April 13 2023",
            title: "可爱的小宝",
            postImg:"http://124.221.215.40/avatar/automan.png",
            avatar: "http://124.221.215.40/avatar/icon5.jpg",
            content:"某年某月某日，奥特曼来到地球，并将他的名字改成谢小宝",
            readingNum: 91,
            collectionNum: {
                array:[105]
            },
            commentNum: 3
        }]
        this.setData({
            postList:postList
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