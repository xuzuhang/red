const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      user:{
          img:"",
          name:""
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: (res) => {
        this.data.user.img = res.userInfo.avatarUrl
        this.data.user.name = res.userInfo.nickName
        this.setData({
          user: this.data.user
        })
      }
    })
  },
  phone(){
    wx.showToast({
      title: '注册未满3个月不能修改手机号码哦',
      icon:"none",
      duration:2000
    })
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
    return {
      title: app.globalData.shareObj.title,
      imageUrl: app.globalData.shareObj.imgUrl,
      path: app.globalData.shareObj.path
    }
  }
})