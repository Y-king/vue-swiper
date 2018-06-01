<template lang="html">
    <div class="nav">
        <div class="wrapper">
            <ul>
              <li v-for='(item,index) in mylist'>
                <a :href="item.link">{{item.title}}</a>
              </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props:['mylist']
}
</script>
<style lang="css" scoped>
  .nav{width: 100%;height:30px; padding: 5px 0; background:#2b1426;}
  .nav ul{ height: 30px;}
  .nav li{ float:left; width: 20%; height: 100%; line-height: 30px;}
  .nav li a{ display: block; text-align: center; font-size: 14px; color: #e6756f;}
  .nav li a:hover{ color:#db315c;}
</style>
