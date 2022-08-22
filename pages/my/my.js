// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 临时微信用户昵称和头像
        nickName: '未登录',
        src: '../../images/index.png',
        // 临时新闻数据
        newsList: [],
        isLogin: false,
        FavorCount: 0,
    },

    // 用户登录函数
    getUserProfile() {
        wx.getUserProfile({
            desc: '获取用户头像、昵称',
            success: (res) => {
                // 获取个人信息
                this.setData({
                    src: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName,
                    isLogin: true
                })
                // 获取收藏新闻
                this.getFavorList();
            }
        })
    },

    // 获取收藏新闻
    getFavorList() {
        let FavorList = JSON.parse(wx.getStorageSync('FavorList') || '[]')
        this.setData({
            newsList: FavorList,
            FavorCount: FavorList.length
        })
    },

    // 点击去往 detail
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
    onLoad(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (this.data.isLogin) {
            this.getFavorList()
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})