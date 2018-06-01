<template>
  <div class="content">
    <my-nav :mylist='navlist'></my-nav>
    <my-banner :mybanner='bannerlist' :bannerHeight='bannerHeight'></my-banner>
    <!-- <div class="wrapper">
        <p>分享的次数为：{{shareNum}}</p>
        <my-share @shared='fatherShare'></my-share>
    </div> -->
    <div class="wrapper clearfix">
      <div class="newslist">
        <h2 class="title">新闻公告</h2>
        <my-newslist :newslist='newslist'></my-newslist>
      </div>
      <div class="activelist">
        <h2 class="title">热门活动</h2>
        <my-active :activelist='activelist'></my-active>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import Share from './news/share.vue';
  import NewsList from './news/newslist.vue';
  import ActiveList from  './news/activelist.vue';
  import Banner from './banner/banner.vue';
  export default {
    //定义局部组件
    components:{'my-share':Share,'my-newslist':NewsList,'my-active':ActiveList,'my-banner':Banner},
    data(){
      return{
        //导航数据
        navlist:[
          {title:'首页',link:'https://www.baidu.com'},
          {title:'手游',link:'https://www.baidu.com'},
          {title:'页游',link:'https://www.baidu.com'},
          {title:'H5小游戏',link:'https://www.baidu.com'},
          {title:'主机游戏',link:'https://www.baidu.com'},
        ],
        // 轮播图数据
        bannerlist:[
          {title:'轮播图1',link:'https://www.baidu.com',imgname:'b1.jpg'},
          {title:'轮播图2',link:'https://www.baidu.com',imgname:'b2.jpg'},
          {title:'轮播图3',link:'https://www.baidu.com',imgname:'b3.jpg'},
          {title:'轮播图4',link:'https://www.baidu.com',imgname:'b4.jpg'}
        ],
        // 新闻列表
        newslist:[
          {title:'谁是习近平心中的英雄',link:'http://news.cctv.com/2018/05/26/ARTIKgx5L9vobnLvV9qStJ4S180526.shtml',time:'2017-12-25'},
          {title:'习近平向2018中国国际大数据产业博览会致贺信',link:'http://news.cctv.com/2018/05/26/ARTIKgx5L9vobnLvV9qStJ4S180526.shtml',time:'2018-01-25'},
          {title:'习近平会见法国前总统',link:'http://news.cctv.com/2018/05/26/ARTIKgx5L9vobnLvV9qStJ4S180526.shtml',time:'2018-02-25'},
          {title:'微视频：英雄归来  我们家的报国故事',link:'http://news.cctv.com/2018/05/26/ARTIKgx5L9vobnLvV9qStJ4S180526.shtml',time:'2018-03-25'},
          {title:'习近平部署这项重要工作 今后审计工作这么干',link:'http://news.cctv.com/2018/05/26/ARTIKgx5L9vobnLvV9qStJ4S180526.shtml',time:'2018-05-25'}
        ],
        //分享次数
        shareNum:0,
        //轮播图高度
        bannerHeight:400,
        //热门活动
        activelist:[
          {imgname:'b1.jpg',title:'英雄，在习近平心中重逾千钧',link:'https://news.baidu.com/',xq:'天地英雄气，千秋尚凛然。”无数英雄先烈是我们民族的脊梁。习近平总书记有着深沉的英雄情怀，他号召全社会都要崇尚英雄，捍卫英雄，学习英雄，关爱英雄。新华社《学习进行时》原创品牌栏目“讲习所”今天推出文章，为您梳理解读。'},
          {imgname:'',title:'一镜穿越百年 这些人你都认识吗  我们家的报国故事',link:'https://news.baidu.com/',xq:''},
          {imgname:'',title:'习近平：用好审计这把“利器”',link:'https://news.baidu.com/',xq:''},
        ]
      }
    },
    methods:{
      fatherShare(){
        this.shareNum++
      }
    }
  }
</script>
