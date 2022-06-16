<template>
  <div class="home">
    <div class="nav-bar">
      <van-field
          class="search"
          v-model="search"
          left-icon="search"
          placeholder="显示您想搜索的内容"
      />
      <div class="screen">
        <p>筛选</p>
        <van-icon name="weapp-nav" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      search:""
    }
  }
}
</script>

<style scoped lang="less">
::v-deep .nav-bar .van-cell{
  line-height: unset;
}
::v-deep .nav-bar .van-field__left-icon .van-icon{
  font-size: 15px;
}
.home{
  .nav-bar{
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: #FFD101;
    padding-left: 10px;
    padding-right: 10px;
    .screen{
      justify-content: center;
      width: 20%;
      display: flex;
      align-items: center;
      font-size: 15px;
      p{
        margin-right: 5px;
      }
    }
    .search{
      border-radius:20px;
      width: 80%;
    }
  }
}
</style>
