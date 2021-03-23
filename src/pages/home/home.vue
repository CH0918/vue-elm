<template>
  <div class="home-wrapper">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">
        <a href="javascript:void(0)">
          ele.me
        </a>
      </div>
      <div class="header-right">
        <a href="javascript:void(0);">
          登录
        </a>
        <span>|</span>
        <a href="javascript:void(0);">
          注册
        </a>
      </div>
    </div>

    <!-- 定位 -->
    <div class="local">
      <div class="current-location">
        <span class="location-left">
          当前定位的城市：
        </span>
        <span class="location-right">
          定位不准时，请在城市列表中选择
        </span>
      </div>
      <div class="current-city">
        <span class="current-city-name">
          广州
        </span>
        <svg width="300" height="180">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#arrow-right"
          ></use>
        </svg>
      </div>
    </div>

    <!-- 热门城市 -->
    <div class="city-hot"></div>

    <!-- 城市列表 -->
    <div class="city-list"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import './../../assets/styles/base.scss';
.home-wrapper {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 10px;
    background-color: $colorA;
    a,
    span {
      color: #fff;
    }
  }
  .local {
    // padding: 0 10px;
    .current-location,
    .current-city {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      height: 60px;
      line-height: 80px;
      border-bottom: 1px solid #e4e4e4;
    }
    .current-location {
      .location-left {
        font-size: 12px;
      }
      .location-right {
        font-size: 12px;
        font-weight: 700;
        color: #9f9f9f;
      }
    }
    .current-city {
      .current-city-name {
        line-height: 60px;
        color: $colorA;
        font-size: 25px;
      }
      .arrow_right {
        height: 20px;
        width: 20px;
        fill: #999;
      }
    }
  }
}
</style>
