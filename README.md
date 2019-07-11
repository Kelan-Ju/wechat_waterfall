# wechat_waterfall
微信小程序瀑布流waterfall简单的实现方法。
不需要知道图片的尺寸比例，也不需要大量的代码，简单又适用。
![waterfall.gif](https://upload-images.jianshu.io/upload_images/18688415-39333d55f94bc31e.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/348/format/webp)

直接上代码：
在.wxml文件中：
```
<view class="content-bg">
  <view class="content">
    <view class="left">
      <view wx:for="{{dataArray}}">
        <template is="template" wx:if="{{index%2==0}}" data="{{object : item}}" />
      </view>
    </view>

    <view class="right">
      <view wx:for="{{dataArray}}">
        <template is="template" wx:if="{{index%2==1}}" data="{{object : item}}" />
      </view>
    </view>
  </view>
</view>

<template name="template">
  <view class="item">
    <image class="item-img" src="{{object.imgUrl}}" mode="widthFix"></image>
    <view class="item-title">{{object.title}}</view>
    <text class='description'>{{object.description}}</text>
    <view class="author-view">
      <image class="avatar" src="{{url)}}"></image>
      <text class="author-name">{{author_name)}}</text>
      <text class="time">{{time}}</text>
    </view>
  </view>
</template>
```
在.wxss中：
```
/**index.wxss**/

.content-bg {
  margin-top: 10px;
  padding-top: 5px;
  /* border-top:1px #dadada solid; */
  background-color: #eef0f0;
}

.content {
  margin-left: 10rpx;
  clear: both;
  overflow: hidden;
  width: 725rpx;
}

.content .left, .content .right {
  width: 49%;
}

.content .left {
  float: left;
}

.content .right {
  float: right;
}

.item {
  display: inline-block;
  background: #fff;
  margin-bottom: 10rpx;
  border-radius: 10px;
  /* box-shadow:0px 0px 5px 5px #eef0ed; */
  border: 1px #eef0ed solid;
  width: 100%;
}

.item-img {
  width: 100%;
  border-radius: 10rpx 15rpx 0 0;
}

.item-title {
  margin-left: 10rpx;
  font-size: 14px;
  font-family: 'PingFang SC-Medium';
  /*只显示2行  */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.description {
  margin: 10rpx 5rpx 10rpx 10rpx;
  font-size: 12px;
  color: gray;
  /*只显示三行  */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.author-view {
  padding: 10rpx 0 10rpx 10rpx;
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  float: left;
  margin-right: 10px;
}

.author-name {
  font-size: 13px;
  font-family: 'PingFang SC-Medium';
  color: rgb(58, 57, 57);
  display: block;
}

.time {
  font-size: 11px;
  font-family: 'PingFang SC-Medium';
  color: gray;
  display: block;
}
```
