Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 打字机展示文字
        text: '',

        btnShow: false,
    },

    // 打字动画
    typeMachine() {
        // 定义光标的关键帧

        let sentence = "爱意东升西落，\n浪漫至死不渝。"
        let i = 0;
        let time = setInterval(() => {
            let text = sentence.substring(0, i);
            i++;
            this.setData({
                text: text,
            })

            if (i == sentence.length + 1) {
                console.log("你好");
                setTimeout(() => {
                    this.setData({
                        btnShow: true
                    })
                }, 300)
                clearInterval(time);
            }
        }, 200)
    },

    // 按钮点击事件
    goToHome() {
        wx.switchTab({
          url: '/pages/home/home',
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.typeMachine()
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
        this.setData({
            text: ''
        })
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