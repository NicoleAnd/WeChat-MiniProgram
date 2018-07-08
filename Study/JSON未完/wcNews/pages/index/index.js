Page({
  data: {
  },
  onLoad: function () {
    "use strict";
    var that = this;
    wx.request({
      url: 'http://127.0.0.1/wechat/toutiao.json',
      data:{},
      method:'GET',
      header:{
        'Content-Type':'json'
      },
      success:function(res){
        var news = res.data.news;

        // 时间
        // for(var i=0;i<news.length;i++){
        //   news[i].time = new Date(news[i].time*1000).format('yyyy-MM-dd hh:mm');
        //}
        that.setData({
          news:news
        })
      },
      fail:function(res){
        console.log(res);
      },
      complete:function(){
        
      }
    })
  },
  showdetail:function(e){
    var id = e.currentTarget.dataset.id;//获取data-id='{{item.id}}'
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id
    })
  }
})
