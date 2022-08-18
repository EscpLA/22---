Page({

    /**
     * 页面的初始数据
     */
    data: {
        region: ['山东省', '青岛市', '崂山区'],
        now: {
            humidity: 0,
            pressure: 0,
            vis: 0,
            windDir: 0,
            windSpeed: 0,
            windScale: 0,
            icon: 999
        }
    },

    //   地区改变函数
    regionChange(e) {
        this.setData({
            region: e.detail.value
        })
        this.getWeather();
    },

    // 获取天气信息
    getWeather() {
        // 请求URL
        const host = 'https://devapi.qweather.com/v7/weather/now';
        const key = 'eb6c366bd58d469e947154c800cd0d0b';
        // 获取 LoacationID
        let utils = require('../../utils/util.js')
        const loacationID = utils.getLocationID(this.data.region[1])
        
        wx.request({
          url: host ,
          data: {
              key: key,
              location: loacationID
          },    
          success: ({data: res}) => {
              console.log('getWeather', res);
              this.setData({
                  now: res.now
              })
          },
          fail: () => {
              console.log("请求失败");
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getWeather()
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