var mainImg = "http://124.221.215.40/avatar/icon5.jpg"
var postList = [{
    postId: 1,
    date: "April 13 2023",
    title: "明亮的彩虹",
    postImg:"http://124.221.215.40/avatar/icon5.jpg",
    avatar: "http://124.221.215.40/avatar/icon5.jpg",
    content:"美丽的彩虹千千万万，只有这道彩虹独一无二",
    readingNum: 92,
    collectionNum: 108,
    commentNum: 7,
    collectImg: "http://124.221.215.40/icon/wx_app_collect.png",
    viewImg: "http://124.221.215.40/icon/wx_app_view.png",
    messageImg: "http://124.221.215.40/icon/wx_app_message.png",
    collectedImg:"http://124.221.215.40/icon/wx_app_collected.png",
    author:"姚大宝",
    dateTime:"3天前",
    collectStatus:false,
    upStatus:false,
    upNum:10,
    upImg:"http://124.221.215.40/icon/wx_app_like.png",
    upedImg:"http://124.221.215.40/icon/wx_app_liked.png",
    comments: [
        {
            username: '遥尘',
            avatar:"http://124.221.215.40/avatar/icon4.png",
            content: {
                txt:"彩虹图片满分, 内容完美"
            },
            create_time: '1484723353'
        },
        {
            username: '天地',
            avatar:"http://124.221.215.40/avatar/icon3.png",
            content: {
                txt:"那一年的彩虹，那一年的美",
            },
            create_time: '1484723338'
        }
    ],
    detail:"彩虹，那道梦幻般的天际之桥，用七彩的缤纷为大地练成一幅绚丽多姿的画卷。每当雨后阳光初现，彩虹便在天空中闪现，仿佛是大自然的调色板，把蓝天、白云、绿树、田野统统染上了梦幻的色彩。那金黄、橙红、翠绿、湛蓝、靛紫、玫红、淡紫等七彩斑斓的颜色交织在一起，如同时光的琴弦，奏响了生命的乐章。彩虹，不仅是孩子们的童话，更是我们心中永不消逝的希望之光，寓意着美好愿景和无尽的憧憬。"
},{
    postId: 2,
    date: "April 13 2023",
    title: "奥特曼之谢小宝篇",
    postImg:"http://124.221.215.40/avatar/automan.png",
    avatar: "http://124.221.215.40/avatar/icon5.jpg",
    content:"某年某月某日，奥特曼来到地球，并将他的名字改成谢小宝",
    readingNum: 91,
    collectionNum: 105,
    commentNum: 3,
    collectImg: "http://124.221.215.40/icon/wx_app_collect.png",
    viewImg: "http://124.221.215.40/icon/wx_app_view.png",
    messageImg: "http://124.221.215.40/icon/wx_app_message.png",
    collectedImg:"http://124.221.215.40/icon/wx_app_collected.png",
    author:"姚大宝",
    dateTime:"2天前",
    collectStatus:false,
    upStatus:false,
    upNum:10,
    upImg:"http://124.221.215.40/icon/wx_app_like.png",
    upedImg:"http://124.221.215.40/icon/wx_app_liked.png",
    comments: [
        {
            username: '遥尘',
            avatar:"http://124.221.215.40/avatar/icon2.jpg",
            content: {
                txt:"奥特曼，永远"
            },
            create_time: '1484723344'
        },
        {
            username: '拿破仑',
            avatar:"http://124.221.215.40/avatar/icon.png",
            content: {
                txt:"永远的光",
            },
            create_time: '1484723334'
        }
    ],
    detail:"奥特曼，这个来自M78星云的光之战士，一直以来都是许多人童年的英雄梦想。身着银色战甲的他，具备神秘强大的超能力，能够在危急时刻迅速变大，与邪恶的怪兽展开激战。每当地球面临严重危机时，奥特曼总会挺身而出，将光明和希望带给人们，使他们相信生活中充满美好。奥特曼的出现激发了我们追求正义与勇敢的精神，让我们明白，只要心中怀有信念，我们都可以成为自己生活中的英雄。如今，虽然童年的日子已经远去，但奥特曼永远是我们心中那个无畏的守护者。"
}]

module.exports = {
    postList: postList,
}