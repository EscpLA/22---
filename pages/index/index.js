let common = require("../../utils/common")
Page({

    /**
     * 页面的初始数据
     */
    /**
     * 页面的初始数据
     */
    data: {
        //幻灯片素材
        swiperImg: [{
                src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage1.jpg'
            },
            {
                src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage2.jpg'
            },
            {
                src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage3.jpg'
            }
        ],
        newsList: []
    },

    // 跳转到详情页
    goToDetail(e) {
        // console.log("跳转id", e.currentTarget.dataset.id);
        wx.navigateTo({
          url: '../detail/detail?id=' + e.currentTarget.dataset.id,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            newsList: common.getNewsList()
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

    }
})