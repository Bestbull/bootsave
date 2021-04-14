var app = getApp();

Page({
  data: {
    Height: 0,
    scale: 13,
    persons:"队员1号",
    latitude: "",
    longitude: "",
    markers: [],
    controls: [{
      id: 1,
      iconPath: '/assests/imgs/jian.png',
      position: {
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '/assests/imgs/jia.png',
      position: {
        left: 340,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }
    ],
    circles: [],
    // listData: [{
    //         "id":1,
    //         "placeName": "测试地址1",
    //         "placeImageUrl": "",
    //         "placeOpenTime": 1506200400,
    //         "placeCloseTime": 1506265200,
    //         "placeAddress": "测试地址1啊",
    //         "placeLongitude": "114.08190678985596",
    //         "placeLatitude": "22.544808209639864"
    //       }, {
    //         "id": 2,
    //         "placeName": "测试地址2",
    //         "placeImageUrl": "",
    //         "placeOpenTime": 1506200400,
    //         "placeCloseTime": 1506265200,
    //         "placeAddress": "测试地址2啊",
    //         "placeLongitude": "114.0938372555542",
    //         "placeLatitude": "22.53953655390022"
    //       }, {
    //         "id": 3,
    //         "placeName": "测试地址3",
    //         "placeImageUrl": "",
    //         "placeOpenTime": 1506243600,
    //         "placeCloseTime": 1506265200,
    //         "placeAddress": "测试地址3啊",
    //         "placeLongitude": "114.05454",
    //         "placeLatitude": "22.52291"
    //       }],
      

  },
  // onReady: function(e) {
  //       // 使用 wx.createMapContext 获取 map 上下文
  //       this.mapCtx = wx.createMapContext('myMap')
  //     },
    
  onLoad: function () {
    var _this = this;
    var that = this;
        that.setData({
          url: app.globalData.url
        })
    
    wx.getSystemInfo({
      type: 'wgs84',
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          // markers: that.getSchoolMarkers(),
          // scale: 12,
          // longitude: res.longitude,
          // latitude: res.latitude,
          view: {
            Height: res.windowHeight
          }

        })

      }
    });


    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {

        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            // iconPath: "/assests/imgs/my.png",
            customCallout:{//自定义气泡
              display:"ALWAYS",//显示方式，可选值BYCLICK
          anchorX:0,//横向偏移
          anchorY:0,
          },
          title:"标题",//标题，点击的时候展示
            callout:{//不适用自定义气泡的东西，在这里面写样式和内容
              content:"99+",
              textAlign:"center",
              color:"#fff",
              borderWidth:0,
              bgColor:'rgba(0,0,0,0.2)',//背景颜色，可使用rgba
              anchorY:30,
              fontSize:16,
              display:"ALWAYS",
            }, 
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 3000,//半径,单位米
            strokeWidth: 1
          }]

        })
      }

    })

  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    console.log(e.markerId)

    wx.showActionSheet({
      itemList: [this.data.persons],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }

  },

  
// bindcallouttap: function(e) {
//   console.log("头上文字被点击", e)
// },
// markertap: function(e) {
//   console.log("定位的点被点击", e)
// },
// controltap: function(e) {
//   console.log("111")
//   this.moveToLocation()
// },
// getSchoolMarkers() {
//   var market = [];
//   for (let item of this.data.listData) {
//     let marker1 = this.createMarker(item);
//     market.push(marker1)
//   }
//   console.log("market===========", market)
//   return market;
// },
// moveToLocation: function() {
//   this.mapCtx.moveToLocation()
// },
// strSub: function(a) {
//   var str = a.split(".")[1];
//   str = str.substring(0, str.length - 1)
//   return a.split(".")[0] + '.' + str;
// },
// createMarker(point) {
//   let latitude = this.strSub(point.placeLatitude);
//   let longitude = point.placeLongitude;
//   let marker = {
//     // iconPath: "../images/here.png",
//     id: point.id || 0,
//     name: point.placeName || '',
//     title: point.placeName || '',
//     latitude: latitude,
//     longitude: longitude,
//     label: {
//       x: -24,
//       y: -26,
//       content: point.placeName
//     },
//     width: 50,
//     height: 50,
//     callout: {
//       content: point.placeName || '',
//       fontSize: 14,
//       bgColor: "#FFF",
//       borderWidth: 1,
//       borderColor: "#CCC",
//       padding: 4,
//       display: "ALWAYS",
//       textAlign: "center"
//     }
//   };
//   return marker;
// }
})


