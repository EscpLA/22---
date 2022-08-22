var common = require("../../utils/common")
// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 页面传递的参数
        query: {},
        article: {},
        isAdd: false,

    },

    // 添加收藏
    addFavor() {
        // 将当前新闻 push 入收藏夹，既放入 localStorage
        let FavorList = [];
        FavorList = JSON.parse(wx.getStorageSync('FavorList') || '[]');
        FavorList.push(this.data.article)
        this.setData({
            isAdd: true
        })
        wx.setStorageSync('FavorList', JSON.stringify(FavorList))

        wx.showToast({
            title: '收藏成功',
        })
    },

    // 取消收藏
    cancelFavor() {
        // 需要取消收藏的新闻下标
        let index = 0
        let FavorList = [];
        FavorList = JSON.parse(wx.getStorageSync('FavorList') || '[]');
        // 找下标
        FavorList = FavorList.filter(each => {
            return each.id != this.data.query.id
        })
        // 删除元素
        wx.setStorageSync('FavorList', JSON.stringify(FavorList))

        this.setData({
            isAdd: false
        })

        wx.showToast({
            title: '取消收藏',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            query: options
        })
        // 根据 id 获取新闻数据
        let msg = common.getNewsDetail(this.data.query.id);
        if (msg.code == 200) {
            this.setData({
                article: msg.news
            })
            // 查找是否被收藏
            let FavorList = [];
            FavorList = JSON.parse(wx.getStorageSync('FavorList') || '[]');
            FavorList.forEach(each => {
                if (each.id == this.data.query.id) {
                    this.setData({
                        isAdd: true
                    })
                }
            })
        } else {
            this.wx.showToast({
                title: '无您查找的文章',
                duration: 1000,
            })
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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