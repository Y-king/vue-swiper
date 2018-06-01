<template lang="html">
    <div class="news">
        <ul>
          <li v-for='(item,index) in newslist'>
            <a :href="item.link">{{item.title}}</a>
            <span>{{item.time}}</span>
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  props:['newslist']
}
</script>
<style lang="css" scoped>
</style>
