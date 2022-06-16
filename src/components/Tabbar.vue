<template>
  <van-tabbar
      v-model="active"
      active-color="#FED722"
      inactive-color="#979799"
      :border=false
  >
    <van-tabbar-item
        :to="v.path"
        :key="key"
        replace
        v-for="(v,key) in tabBarList">
      <span>{{v.title}}</span>
      <template #icon="props">
        <img :src="props.active ? v.icon.active : v.icon.noActive" :alt=v.title />
      </template>
    </van-tabbar-item>
  </van-tabbar>

</template>

<script>
export default {
  name: "TabBar",
  data(){
    return  {
      active:0,
      tabBarList:[
        {
          title : "视频",
          path : "/",
          name : "home",
          icon:{
            active: require('@/assets/tabbar/home.png'),
            noActive:require('@/assets/tabbar/unhome.png'),
          }
        },{
          title : "频道",
          path : "/Channel",
          name : "channel",
          icon:{
            active: require('@/assets/tabbar/channel.png'),
            noActive:require('@/assets/tabbar/unchannel.png'),
          }
        },{
          title : "热点",
          path : "/Hotspot",
          name : "hotspot",
          icon:{
            active: require('@/assets/tabbar/hotspot.png'),
            noActive:require('@/assets/tabbar/unhotspot.png'),
          }
        },{
          title : "我的",
          path : "/Mine",
          name : "mine",
          icon:{
            active: require('@/assets/tabbar/mine.png'),
            noActive:require('@/assets/tabbar/unmine.png'),
          }
        }
      ]
    }
  },
  watch:{
    '$route'(to){
      for (let i=0; i < this.tabBarList.length; i++){
        if(to.name === this.tabBarList[i].name){
          this.active = i;
          return true
        }
      }
    }
  },
  created() {
    for (let i=0; i < this.tabBarList.length; i++){
      if(this.$route.name === this.tabBarList[i].name){
          this.active = i;
          return true
      }
    }
  }

}
</script>

<style scoped>
.van-tabbar-item--active {
  background-color: unset;
}
.van-tabbar{
  height: 60px;
  border-radius:20px 20px 0 0;
  background-color: #FFF;
}
.van-tabbar-item__icon img {
  height: 30px;
}
.van-tabbar-item__text span{
  font-size: 14px;
  font-weight: 700;
}
</style>
