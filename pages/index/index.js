Page({

    /**
     * 页面的初始数据
     */
    data: {
        //   四个视频的地址
        list: [{
                id: '1001',
                title: '杨国宜先生口述校史实录',
                videoUrl: 'http://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'
            },
            {
                id: '1002',
                title: '唐成伦先生口述校史实录',
                videoUrl: 'http://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4'
            },
            {
                id: '1003',
                title: '倪光明先生口述校史实录',
                videoUrl: 'http://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4'
            },
            {
                id: '1004',
                title: '吴仪兴先生口述校史实录',
                videoUrl: 'http://arch.ahnu.edu.cn/__local/5/DA/BD/7A27865731CF2B096E90B522005_A29CB142_6525BCF.mp4?e=.mp4'
            }
        ],
        // 当前播放视频地址
        src: "",
        // 用于存储弹幕
        danmu: ""
    },

    //   点击播放函数
    playVideo(e) {
        this.setData({
            src: e.currentTarget.dataset.url
        })
        this.videoCtx.play()
    },

    // 获取弹幕
    getDanmu(e) {
        // console.log(e.detail.value);
        this.setData({
            danmu: e.detail.value
        })
    },

    // 发送弹幕
    sendDanmu() {
        console.log("发送弹幕");
        let text = this.data.danmu;
        let color = this.getRandomColor()
        // 调用视频组件的函数，实现发送弹幕。
        this.videoCtx.sendDanmu({
            text: text,
            color: color
        })
        // 每次发送弹幕后，清空弹幕框
        this.setData({
            danmu: ''
        })
    },

    // 获取随机颜色 rgb
    getRandomColor() {
        let rgb = [];
        // 分别获取 r g b
        for (let i = 0; i < 3; i++) {
            // 先获取 [0, 256) 之间的随机数，再向下取整，得到[0, 255]之间的整数
            // 再将随机数转 16 进制
            let color = Math.floor(Math.random() * 256).toString(16);
            // 如果 16 进制只有一位，在前面补0，使其变为2位。
            color = color.length == 1 ? '0' + color : color;
            rgb.push(color);
        }
        // 同：
        // # + rgb[0] + rgb[1] + rgb[2]
        return '#' + rgb.join('')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 创建视频播放组件的上下文
        this.videoCtx = wx.createVideoContext('myVideo')
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