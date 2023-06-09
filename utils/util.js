function getDiffTime(recordTime,yearsFlag) {
    if (recordTime) {
        recordTime=new Date(parseFloat(recordTime)*1000);
        var minute = 1000 * 60,
            hour = minute * 60,
            day = hour * 24,
            now=new Date(),
            diff = now -recordTime;
        var result = '';
        if (diff < 0) {
            return result;
        }
        var weekR = diff / (7 * day);
        var dayC = diff / day;
        var hourC = diff / hour;
        var minC = diff / minute;
        if (weekR >= 1) {
            var formate='MM-dd hh:mm';
            if(yearsFlag){
                formate='yyyy-MM-dd hh:mm';
            }
            return recordTime.format(formate);
        }
        else if (dayC == 1 ||(hourC <24 && recordTime.getDate()!=now.getDate())) {
            result = '昨天'+recordTime.format('hh:mm');
            return result;
        }
        else if (dayC > 1) {
            var formate='MM-dd hh:mm';
            if(yearsFlag){
                formate='yyyy-MM-dd hh:mm';
            }
            return recordTime.format(formate);
        }
        else if (hourC >= 1) {
            result = parseInt(hourC) + '小时前';
            return result;
        }
        else if (minC >= 1) {
            result = parseInt(minC) + '分钟前';
            return result;
        } else {
            result = '刚刚';
            return result;
        }
    }
    return '';
}


(function initTimeFormat(){
    Date.prototype.format = function(format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3)/3),
            "S": this.getMilliseconds()
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
            
    };
})()

function convertToStarsArray(stars) {
    var num = stars/10;
    var array = [];
    for (var i = 1; i <= 5; i++) {
        if (i < num) {
            array.push(1);
        } else {
            if ((i-num) === 0.5) {
                array.push(0.5);
            } else {
                array.push(0);
            }
        }
    }
    return array
}

module.exports = {
  getDiffTime:getDiffTime,
  convertToStarsArray:convertToStarsArray
}
