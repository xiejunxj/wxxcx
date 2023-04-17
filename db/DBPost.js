var util = require('../utils/util.js')
class DBPost {
    constructor(postId) {
        this.storageKeyName='postList';
        this.postId = postId;
    }
    getAllPostData() {
        var res = wx.getStorageSync(this.storageKeyName);
        if (!res) {
            res = require("../data/data.js");
            this.execStorageSync(res);
        }
        return res;
    }
    execStorageSync(data) {
        wx.setStorageSync(this.storageKeyName, data)
    }
    getPostItemById() {
        var postData = this.getAllPostData();
        var len = postData.length;
        for (var i = 0; i < len; i++) {
            if (postData[i].postId == this.postId) {
                return {
                    index:i,
                    data: postData[i]
                }
            }
        }
    }
    getCommentData() {
        var itemData = this.getPostItemById().data;
        itemData.comments.sort(this.compareWithTime);
        var len = itemData.comments.length;
        var comment;
        for (var i = 0; i < len; i++) {
            comment = itemData.comments[i];
            comment.create_time = util.getDiffTime(comment.create_time, true);
        }
        return itemData.comments;
    }
    compareWithTime(value1, value2) {
        var flag = parseFloat(value1.create_time) - parseFloat(value2.create_time);
        if (flag < 0) {
            return 1;
        } else if (flag > 0) {
            return -1;
        } else {
            return 0;
        }
    }
    collect() {
        return this.updatePostData('collect');
    }
    // 点赞
    up() {
        return this.updatePostData('up');
    }
    updatePostData(category) {
        var itemData = this.getPostItemById();
        var postData = itemData.data;
        var allPostData = this.getAllPostData();
        switch(category) {
            case 'collect':
                if (!postData.collectStatus) {
                    postData.collectionNum++;
                    postData.collectStatus = true;
                } else {
                    postData.collectionNum--;
                    postData.collectStatus = false;
                }
                break;
            case 'up':
                if (!postData.upStatus) {
                    postData.upNum++;
                    postData.upStatus = true;
                } else {
                    postData.upNum--;
                    postData.upStatus = false;
                }
            default:
                break;
        }
        allPostData[itemData.index] = postData;
        this.execStorageSync(allPostData);
        return postData;
    }
}

export {DBPost}