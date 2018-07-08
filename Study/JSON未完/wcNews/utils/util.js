const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

/**
 * 使用方法 如下:
 *              var date = new Date();
 *              var todayFormat = date.format('yyyy-MM-dd'); //结果为2015-2-3
 * Parameters:
 * format - {string} 目标格式 类似('yyyy-MM-dd')
 * Returns - {string} 格式化后的日期 2015-2-3
 */
(function(){
  Data.prototype.format = function(format){
    var o = {
      "M+":this.getMonth() + 1, //month
      "d+":this.getDate(),  //day
      "h+":this.getHours(), //hour
      "m+":this.getMinutes(), //minute
      "s+":this.getSeconds(), //second
      "q+":Math.floor((this.getMonth() + 3) / 3), //quarter
      "s+":this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format = format.replace(RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for(var k in o) if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
          ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  };
})()

