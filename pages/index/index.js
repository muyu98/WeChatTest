import common from "../../utils/public.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {title:"UI设计作品",name:"Ui design works",src:"/images/xszp1.jpg"},
      {title:"室内作品设计",name:"INterior design works",src:"/images/xszp2.jpg"},
      {title:"平面设计作品",name:"graphic design works",src:"/images/xszp3.jpg"},
      {title:"网页设计作品",name:"web design",src:"/images/xszp4.jpg"},
      {title:"电商设计作品",name:"electirc business design",src:"/images/xszp5.jpg"},
      {title:"影视后期作品",name:"FIlm televison later",src:"/images/xszp6.jpg"},
      {title:"建筑景观作品",name:"architectural design",src:"/images/xszp7.jpg"},
      {title:"三维仿真作品",name:"3D simulation works",src:"/images/xszp8.jpg"},
    ],
    MyList:[] 
  },
  //发送网络请求
  WxRequset(){
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      data:{
        num:5
      },
      success:res=> {

        res.data.forEach(item => {
          item.posttime = common.getMyData(item.posttime,"Y-m-d");
          item.title = common.getStrLen(item.title,15);
        });
        this.setData({
          MyList:res.data
        })
        // res.data.forEach(item=>{
        //   var time = item.posttime*1000
        //   var d = new Date(time)
        //   var year = d.getFullYear();
        //   var month = (d.getMonth()+1)<10 ? "0"+(d.getMonth()+1) : (d.getMonth()+1)
        //   var day = d.getDate()<10 ? "0"+d.getDate() : d.getDate()
        //   var posttime=year+"-"+month+"-"+day
        //   item.posttime=posttime
          
        // })        
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.WxRequset()    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})