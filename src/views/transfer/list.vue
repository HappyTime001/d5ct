<template>
  <div class="hello">
  	<div>
  		<mt-popup  v-model="popupVisible" style="display: none;">
  			<span class="d5c-gz__close">×</span> 
  			<div class="d5c-gz__dialog">
  				<div class="d5c-gz__code"><div class="d5c-gz_ltrb"></div><div class="d5c-gz_rtlb"></div></div> 
  				<div class="d5c-gz__content"><p>长按识别上方二维码</p> <p>关注“第五创”公众平台</p></div>
  			</div>
  		</mt-popup>
  	</div>
	<div class="d5c-transfer__projects">
	  	<div class="d5c-transfer__search">
	  		<div class="d5c-tab__fixed">
	  			<div class="d5c-transfer_search_input">
	  				<input type="text" name="search" placeholder="输入您要搜索的项目名">
	  				<a class="d5c-transfer_search_btn">搜索</a>
	  			</div> 
	  			<div class="d5c-transfer_search_ad">
	  				<a href="http://api.d5c360.com/v1/ad/87/click">
	  					<img src="../../assets/images/tf0.jpg" title="转让系统上线" alt="转让系统上线">
	  				</a>
	  			</div> 
	  			<div class="d5c-transfer_search_click">
	  				<a class="d5c-transfer_search_condition">发布时间</a> 
	  				<a class="d5c-transfer_search_condition">范围</a> 
	  				<a class="d5c-transfer_search_condition">价格<img src="../../assets/images/aicon.jpg" alt=""></a> 
	  				<a class="d5c-transfer_search_condition">转让状态</a> 
	  				<a class="d5c-transfer_search_condition">属性</a>
	  			</div>
	  		</div>
	  		<mt-popup  v-model="popupVisible" position="top" style="display: none;">
	  		  <div class="d5c-transfer__state">
	  		  	<ul>
	  		  		<li><span class="active">全部</span><img src="../../assets/images/tselect.png"></li>
	  		  		<li><span class="">最近1周</span></li>
	  		  		<li><span class="">最近1个月</span></li>
	  		  		<li><span class="">最近3个月</span></li>
	  		  		<li><span class="">最近6个月</span></li>
	  		  	</ul>
	  		  </div>
	  		</mt-popup>
	  		<mt-popup  v-model="popupVisible"  position="top" style="display: none;">
				<div class="d5c-transfer__state">
					<ul>
						<li><span class="active">全部</span> <img src="../../assets/images/tselect.png"></li>
						<li><span class="">降价</span></li>
						<li><span class="">原价</span></li>
						<li><span class="">溢价0~10%</span></li>
						<li><span class="">溢价10%~20%</span></li>
						<li><span class="">溢价20%~30%</span></li>
						<li><span class="">溢价30%~50%</span></li>
					</ul>
				</div>
	  		</mt-popup>
	  		<mt-popup  v-model="popupVisible"  position="top" style="display: none;">
				<div class="d5c-transfer__state">
					<ul>
						<li><span class="active">全部</span> <img src="../../assets/images/tselect.png"></li>
						<li><span class="">转让中</span> </li>
	  					<li><span class="">转让成功</span></li>
					</ul>
				</div>
	  		</mt-popup>
	  		<mt-popup  v-model="popupVisible"  position="top" style="display: none;">
				<div class="d5c-transfer__state">
					<ul>
						<li><span class="active">全部</span> <img src="../../assets/images/tselect.png"></li>
						<li><span class="">公开转让</span></li>
	  					<li><span class="">定向转让</span></li>
					</ul>
				</div>
	  		</mt-popup>
	  		<!-- <div class="v-modal" style="z-index: 2000;"></div> -->
	  	</div>  <!--d5c-transfer__search结束   -->


		<div class="d5c-transfer__list">
			<ul infinite-scroll-distance="10" class="projects" style="padding-top: 0px;">
				<li class="project">
					<div class="left">
						<span class="d5c-label d5c-label-transfering"></span>
						<div class="projectImage"><img src="../../assets/images/tf1.jpg" alt=""></div> 
						<p class="address">发布于&nbsp;&nbsp;2017-11-18</p>
		        	</div> 
		        	<div class="right">
		        		<div class="text">
		        			<p class="title">藤之屋倾力打造之囧匠</p> 
		        			<p class="about">本项目享有双倍分红，回本周期缩短一半，地处杭州美院附近，经营稳定，因换房需资金周转，故转让！第五创最后一个双倍分红，不容错过！</p>
		        		</div> 
		        		<div class="info">
		        			<img src="../../assets/images/tf_price.png" class="aPrice">
		        			<span class="price"><figure data-v-5c244626="">￥8,200</figure></span>  
		        			<span class="num">转让1份</span>
		        		</div>
		        	</div>
		        </li>
		        <li class="project">
		        	<div class="left">
		        		<span class="d5c-label d5c-label-transfered"></span> 
		        		<div class="projectImage"><img src="../../assets/images/tf2.jpg" alt=""></div> 
		        		<p class="address">发布于&nbsp;&nbsp;2017-11-18</p></div> 
		        	<div class="right">
		        		<div class="text">
		        			<p class="title">胡桃里音乐酒馆佛山店</p> 
		        			<p class="about">用钱，转了。定向转让</p>
		        		</div> 
			        	<div class="info">
			        		<img src="../../assets/images/tf_custom.png" class="property">
			        		<img src="../../assets/images/tf_price_gray.png" class="aPrice"> 
			        		<span class="price"><figure data-v-5c244626="">￥26,250</figure></span>  
			        		<span class="num">转让1份</span>
			        	</div>
		        	</div>
		    	</li>
		    </ul> 
		    <p class="infinite-loading" style="height: 1.2rem; line-height: 1.2rem;">
		    	<span>
		    		<div class="infinite-loading__circle">
		    			<div class="infinite-loading__circle1 circle"></div> 
		    			<div class="infinite-loading__circle2 circle"></div>
		    			<div class="infinite-loading__circle3 circle"></div> 
		    			<div class="infinite-loading__circle4 circle"></div> 
		    			<div class="infinite-loading__circle5 circle"></div> 
		    			<div class="infinite-loading__circle6 circle"></div> 
		    			<div class="infinite-loading__circle7 circle"></div> 
		    			<div class="infinite-loading__circle8 circle"></div> 
		    			<div class="infinite-loading__circle9 circle"></div> 
		    			<div class="infinite-loading__circle10 circle"></div> 
		    			<div class="infinite-loading__circle11 circle"></div> 
		    			<div class="infinite-loading__circle12 circle"></div>
		    		</div>
		    	</span> 
		    	<span>加载中...</span>
		    </p>
  		</div><!--  d5c-transfer__list 结束-->
  	</div><!-- d5c-transfer__projects结束 -->
  	




  	
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '每个人写自己的vue页面组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.d5c-gz__close {
    position: fixed;
    top: -.8rem;
    right: -.4rem;
    font-size: .72rem;
    color: #fff;
    font-family: cursive;
}
.d5c-gz__dialog {
    width: 4.9rem;
    height: 6.1rem;
    border-radius: 3px;
    background-color: #fff;
}
.d5c-gz__dialog {
    width: 4.9rem;
    height: 6.1rem;
    border-radius: 3px;
    background-color: #fff;
}
.d5c-gz__content {
    text-align: center;
    margin-top: .9rem;
    line-height: .4rem;
    font-size: .3rem;
}
/* 内容层  */
.d5c-transfer__projects {
    width: 100%;
    min-height: 100%;
    background-color: #f2eeee;
}
.d5c-transfer__search {
    width: 100%;
    background-color: #fff;
}

/*  搜索   */
.d5c-tab__fixed {
    z-index: 4000;
    position: relative;
    width: 100%;
    height: 4.5rem;
    background-color: #fff;
}
.d5c-transfer_search_input {
    position: relative;
    width: 100%;
    padding: .1rem .11rem;
    box-sizing: border-box;
}
.d5c-transfer_search_input input {
    width: 6.4rem;
    height: .64rem;
    border-radius: .64rem;
    padding-left: .25rem;
    box-sizing: border-box;
    border: none;
    background-color: #f3f3f3;
    outline: none;
    color: #515369;
}
.d5c-transfer_search_btn {
    font-size: .28rem;
    color: #515369;
    margin-left: .1rem;
    position: relative;
    top: .05rem;
}



.d5c-transfer_search_ad {
    position: relative;
    width: 100%;
    padding: 0.2rem 0.11rem;
    box-sizing: border-box;
}
.d5c-transfer_search_ad img{
	width: 100%;
}
.d5c-transfer_search_click {
    width: 100%;
    height: .82rem;
    text-align: center;
    z-index: 1;
    overflow: hidden;
    zoom: 1;
    display: -ms-flexbox;
    display: flex;
}
.d5c-transfer_search_condition {
    display: block;
    -ms-flex: 3;
    flex: 3;
    width: 100%;
    height: .82rem;
    line-height: .82rem;
    font-size: .3rem;
    color: #515369;
    text-align: center;
    position: relative;
}
.d5c-transfer_search_condition img{
	width: 11%;
}

/*  筛选条件  */
.d5c-transfer__search .mint-popup-top {
    width: 100%;
    top: 4.5rem;
}
.d5c-transfer__state {
    position: relative;
    width: 100%;
    padding: .2rem .3rem;
    box-sizing: border-box;
}
.d5c-transfer__state li {
    height: .7rem;
    line-height: .7rem;
    font-size: .3rem;
    color: #515369;
}

.d5c-transfer__state li img {
    float: right;
    width: .37rem;
    height: .26rem;
    margin-top: .22rem;
}



/* list样式 */
.d5c-transfer__list {
    margin-bottom: 1rem;
}
.d5c-transfer__projects .projects {
    padding-top: .88rem;
    margin: .2rem auto 0;
    width: 7.28rem;
}
.d5c-transfer__projects .project {
    width: 100%;
    height: 2.6rem;
    background-color: #fff;
    margin-bottom: .2rem;
}
.d5c-transfer__projects .left {
    position: relative;
    float: left;
    width: 2.66rem;
    height: 100%;
}
.d5c-transfer__projects .d5c-label {
    width: .8rem;
    width: 1rem;
}
.d5c-transfer__projects .projectImage {
    width: 100%;
    height: 1.91rem;
}
.projectImage img{
	width: 100%;
}
.d5c-label {
    width: 1.53rem;
    height: 1.37rem;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
}
.d5c-label-transfering{
	background-image: url('../../assets/images/tf_zhong.png');
	width: 100%;
}
.d5c-label-transfered{
	background-image: url('../../assets/images/tf_success.png');
	width: 100%;
}
.d5c-transfer__projects .address {
    box-sizing: border-box;
    padding-left: .2rem;
    width: 100%;
    height: .69rem;
    line-height: .69rem;
    background-color: #a7b6c5;
    font-size: .24rem;
    color: #fff;
    margin: 0;
    padding-top: 0;
}
.d5c-transfer__projects .right {
    float: right;
    width: 4.56rem;
    height: 100%;
    padding: 0 .2rem;
    box-sizing: border-box;
}
.d5c-transfer__projects .text {
    width: 100%;
    height: 1.91rem;
}
.d5c-transfer__projects .title {
    padding-top: .15rem;
    font-size: .3rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.d5c-transfer__projects .about {
    margin-top: .15rem;
    max-height: 1.1rem;
    line-height: .36rem;
    color: #a3b9de;
    font-size: .24rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.d5c-transfer__projects .info {
    position: relative;
    width: 100%;
    height: .69rem;
    line-height: .69rem;
}
.d5c-transfer__projects .aPrice {
    width: .34rem;
    height: .3rem;
}
.d5c-transfer__projects .price {
    font-size: .36rem;
    color: #fb5263;
}
figure[data-v-5c244626] {
    display: inline-block;
}
.d5c-transfer__projects .num {
    float: right;
    font-size: .24rem;
    color: #b5b5b5;
}
.d5c-transfer__projects .property {
    margin-right: .04rem;
    width: .34rem;
    height: .3rem;
}


.infinite-loading {
    width: 100%;
    text-align: center;
    background-color: #fff;
    font-size: .3rem;
}
.infinite-loading__circle {
    position: relative;
    width: .6rem;
    height: .6rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: .2rem;
}
.infinite-loading__circle .circle {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    margin-right: .1rem;
}
.infinite-loading__circle1 {
    transform: rotate(30deg);
}
.infinite-loading__circle2 {
    transform: rotate(60deg);
}
.infinite-loading__circle3 {
    transform: rotate(90deg);
}
.infinite-loading__circle4 {
    transform: rotate(120deg);
}
.infinite-loading__circle5 {
    transform: rotate(150deg);
}
.infinite-loading__circle6 {
    transform: rotate(180deg);
}
.infinite-loading__circle7 {
    transform: rotate(210deg);
}
.infinite-loading__circle8 {
    transform: rotate(240deg);
}
.infinite-loading__circle9 {
    transform: rotate(270deg);
}
.infinite-loading__circle10 {
    transform: rotate(300deg);
}
.infinite-loading__circle11 {
    transform: rotate(330deg);
}

</style>
