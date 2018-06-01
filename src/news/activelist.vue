<template lang="html">
  <div class="active">
    <ul>
      <li v-for="(item,index) in activelist" :class="`clearfix active${index}`">
         <img :src=" `src/assets/images/${item.imgname}` " alt="">
         <a :href="item.link">{{item.title}}</a>
         <p>{{item.xq}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props:['activelist']
}
</script>
<style lang="css" scoped>
  li{ height: 30px;}
  li a{ height: 30px; line-height: 30px; font-size: 14px; display: block; float: left;}
  li a:hover{ color: #000;}
  li img,li p{float: left; width: 0px; height: 0px;}
  .active0{ height: 90px;}
  .active0 img{ float: left; height: 90px; width: 300px; margin-right: 20px;}
  .active0 a{ float: left; width: 270px; height: 30px; line-height: 30px; font-size: 14px;}
  .active0 p{float: left; width: 270px; height: 60px; line-height: 30px; overflow: hidden; font-size: 12px; text-indent: 2rem; color: #666;}
</style>
