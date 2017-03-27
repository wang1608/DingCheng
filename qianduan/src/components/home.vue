<template>
  <div id="home">
        
        <header>
            <swipe class="my-swipe" :showIndicators="true">
              <swipe-item class="slide1">
                <img src="http://dc.srh9.com/upload/ad/1612/585e4bab97586.jpg" alt="">
              </swipe-item>
              <swipe-item class="slide2">
                <img src="http://dc.srh9.com/upload/ad/1612/585e4bbc37c5e.jpg" alt="">
              </swipe-item>
              <!-- <swipe-item class="slide3">333333</swipe-item> -->
            </swipe>

        </header>
        <nav>
            <ul>
                <li>
                    <i class="iconfont one">&#xe680;</i>
                    <span>抢低价</span>
                </li>
                 <li>
                    <i class="iconfont two">&#xe67b;</i>
                    <span>抢社区</span>
                </li>
                 <li>
                    <i class="iconfont three">&#xe655;</i>
                    <span>抢活动</span>
                </li>
                 <li>
                    <i class="iconfont four">&#xe6c9;</i>
                    <span>大转盘</span>
                </li>
            </ul>
        </nav>
        

        <section class="sec1" v-if="flex.length!=0">
            <div class="left" >        
                              <!-- 不是v-for 拆开创建的话会有异步的问题 注意加判断 -->
              <div class="left_1">
                <p>{{flex[0].adname}}</p>
                <p>{{flex[0].remark}}</p>
                <img :src="flex[0].adimg" alt=""/>
              </div>
            </div>   
            <div class="right">
              <div class="top">
                  <div class="top_l">
                    <p>{{flex[1].adname}}</p>
                    <p>{{flex[1].remark}}</p>
                  </div>
                  <div class="top_r">
                    <img :src="flex[1].adimg" alt=""/>
                  </div>
              </div>
              <div class="bottom">
                <div class="b_left">
                  <p>{{flex[2].adname}}</p>
                  <p>{{flex[2].remark}}</p>
                  <img :src="flex[2].adimg" alt=""/>
                </div>
                <div class="b_right">
                   <p>{{flex[3].adname}}</p>
                  <p>{{flex[3].remark}}</p>
                  <img :src="flex[3].adimg" alt=""/>
                </div>
              </div>
            </div> 
        </section>
        <h3>热卖<span class="r">更多&gt;</span></h3>
        <section class="sec2">
          <ul>
            <li v-for="(data,index) in hot" @click="changepage(data.id)">
              <img :src="data.thumb" alt=""/>
              <h4>{{data.title}}</h4>
              <div class="maininner">
                <span class="l">￥{{data.shop_price}}</span>
                <span class="r">评论0</span>
              </div>
            </li>
           
          </ul>
        </section>


        <h3>推荐<span class="r">更多&gt;</span></h3>
        <section class="sec3">
          <ul>
            <li v-for="(data,index) in recommend">
              <img :src="data.thumb" alt=""/>
              <h4>{{data.title}}</h4>
              <div class="maininner">
                <span class="l">￥{{data.shop_price}}</span>
                <span class="r">评论{{data.count_comment}}</span>
              </div>
            </li>
            
           
          </ul>
        </section>




        <h3>最新<span class="r">更多&gt;</span></h3>
        <section class="sec3 bottom">
          <ul>
            <li v-for="(data,index) in newproduct">
              <img :src="data.thumb" alt=""/>
              <h4>{{data.title}}</h4>
              <div class="maininner">
                <span class="l">￥{{data.shop_price}}</span>
                <span class="r">评论0</span>
              </div>
            </li>
            
           
          </ul>
        </section>
        <ul class="footer">
          <router-link to="/shouye" tag="li" active-class="active2">
            <p class="one iconfont">&#xe601;</p>
            <p class="two">鼎城商城</p>
          </router-link>
          <router-link to="/faxian" tag="li" active-class="active2">
            <p class="one iconfont">&#xe604;</p>
            <p class="two">分类</p>
          </router-link>
          <router-link to="/dingdan" tag="li" active-class="active2">
            <p class="one iconfont">&#xe661;</p>
            <p class="two">社区</p>
          </router-link>
          <router-link to="/shopcar" tag="li" active-class="active2">
            <p class="one iconfont">&#xe682;</p>
            <p class="two">购物车</p>
          </router-link>
          <router-link to="/wode" tag="li" active-class="active2">
            <p class="one iconfont">&#xe624;</p>
            <p class="two">我的</p>
          </router-link>
        </ul>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
import router from "../router";
import axios from 'axios';
export default {
  data(){
        return{
            hot:[],
            recommend:[],
            newproduct:[],
            flex:[],
           
        }
  },
  components:{
        "swipe":Swipe,
        "swipe-item":SwipeItem
  },
  mounted(){
    axios.get('http://localhost:3000/homeapi/home')
              .then( response=>{
                    console.log(response.data.data);
                    this.hot=response.data.data.hot;
                    this.recommend=response.data.data.recommend;
                    this.newproduct=response.data.data.new;
                    this.flex=response.data.data.flex;
                 
              })
              .catch(function (error) {
                console.log(error);
              });

    
  },
  methods:{
    changepage(id){   //跳转页面
        router.push("/shouye/detail/"+id);
    }
  }
}
</script>

<style>


header{
    height:4.27rem;
    width:100%;
    background: #fff;
    border-bottom: 1px solid #ccc
}
header img{
  height:100%;
}
header .mint-swipe-indicator{
  width:.2rem;
  height:.2rem;
}

nav{
    height:2.8rem;
    background: #fff;
    margin-bottom: .25rem
}
nav ul{
    height:100%;
    width:100%;
    display: flex;
}
nav ul li{
    width:25%;
    text-align: center
}
nav ul li i{
  width:1.4rem;
  height:1.4rem;
  display: block;
  margin:.3rem auto;
  color:#fff;
  border-radius: 50%;
  line-height: 1.4rem
}
nav ul li i.one{
  background:#BA55D3;
}
nav ul li i.two{
  background: #FFA500;
}
nav ul li i.three{
  background:#00BFFF;
}
nav ul li i.four{
  background: #FF0000;
}


nav ul li span{
  font-size: .4rem;
  color:#8f8f94;
}

section.sec1{
  height:6rem;
  background: #fff;
  display: flex;
 
   color:#e74c3c ;
}
section.sec1 div.left{
  width:34%;
  padding:.26rem;
  box-sizing: border-box;
  border-right: 2px solid #eee
}
section.sec1 div.left div.left_1{
  width:100%;
  height:60%;
  margin-top: 1rem
}
section.sec1 div.left div.left_1 p{
  height:.64rem;
  line-height: .64rem;
  font-size: .42rem
}
section.sec1 div.left div.left_1 p:nth-child(2){
  color:#8f8f94;
  font-size: .38rem
}
section.sec1 div.left div.left_1 img{
  height:2rem;
  width:2rem;
}


section.sec1 div.right{
  width:66%;
  display: flex;
  flex-direction: column;
}
section.sec1 div.right div.top{
  display: flex;
  height: 2.3rem;
  border-bottom: 1px solid #ccc;
  padding:.25rem;
  box-sizing: border-box;
}
section.sec1 div.right div.top .top_l{
  width:4.58rem;
}
section.sec1 div.right div.top .top_l p{
  height:.64rem;
  line-height: .64rem;
  font-size: .42rem;
  color:#8f8f94
}
section.sec1 div.right div.top .top_l p:first-child{
  color:#3498db ;
}
section.sec1 div.right div.top .top_r{
  width:1.52rem;
}

section.sec1 div.right div.top .top_r img{
  height:1.52rem;
  width:100%;
}



section.sec1 div.right div.bottom{
  display: flex;

}
section.sec1 div.right div.bottom p{
  height:.55rem;
  line-height: .55rem;
  font-size: .38rem;
  color:#8f8f94;
}
section.sec1 div.right div.bottom img{
  height:1.6rem;
  width:1.6rem;
}
section.sec1 div.right div.bottom div.b_left{
  flex:1;
  border-right: 1px solid #ccc;
  height:100%;
  padding:.25rem;
}
section.sec1 div.right div.bottom div.b_left p:first-child{
  color:#FFD700;
}
section.sec1 div.right div.bottom div.b_right p:first-child{
  color:#32CD32;
}
section.sec1 div.right div.bottom div.b_right{
  flex:1;
  height:100%;
  padding:.25rem;
}
h3{
  height:1.15rem;
  line-height: .7rem;
  font-size: .5rem;
  padding:.2rem;
  box-sizing: border-box;
  margin-top: .2rem;
  background: #fff;
  border-bottom: 1px solid #ccc
}
h3 span{
  font-size: .4rem;
  font-weight: 100;

}
section.sec2 ul,section.sec3 ul{
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  margin-bottom: .25rem
}
section.sec2 ul li,section.sec3 ul li{
  width: 50%;
  height:5rem;
  padding:.25rem;
  border-bottom: 1px solid #ccc
}
section.sec2 ul li:nth-child(odd),section.sec3 ul li:nth-child(odd){
  border-right: 1px solid #ccc
}
section.sec2 ul li img,section.sec3 ul li img{
  display: block;
  margin: 0 auto;
  height:2.6rem;
  width:2.6rem;
  margin-bottom: .2rem
}
section.sec2 ul li h4,section.sec3 ul li h4{
  height: 1.2rem;
  line-height: .6rem;
  overflow: hidden;
  font-size: .38rem;
  font-weight: 100
}
section.sec2 ul li div.maininner span.l,section.sec3 ul li div.maininner span.l{
  color:#f00;
  font-size: .45rem
}
section.sec2 ul li div.maininner span.r,section.sec3 ul li div.maininner span.r{
  line-height: .7rem
}
section.bottom{
  margin-bottom: 2rem
}
</style>
