/**异步加载页面的header和footer**/
$('.header').load('header.html');
$('.footer').load('footer.html');
/***为登录按钮绑定事件监听函数**/
jQuery.noConflict();//交出$控制权
(function($){
	$('#login-form input[type="button"]').click(function(){
		var result = $('#login-form').serializeArray();	//序列化
		//var result={"user_name":$("input[name='user_name']").val()
		//	,"user_pwd":$("input[name='user_pwd']").val()};
		$.post('data/checkuname.php',result,function(data){
			var num=parseInt(data);
			if(num===-1){//验证错误
				$('.modal .hint').text('用户名或密码输入错误，请重试');
			}else if(num>0){//用户名和密码都正确
				var uname=$('[name="user_name"]').val();
				$('.xg').text(uname+'欢迎您回来！');
				$('.modal').fadeOut(500);
			}
		});
	});
	/*$('#btSave').click(function(){
		var sum={
			user_name:$('#user_name').val(),
			user_pwd:$('#user_pwd').val()
		};
		//发起AJAX请求，向服务器提交数据
		$.ajax({
			type:'POST',
			url:'data/regster.php',
			data:sum,
			success:function(data){
				$('.moda2-content').text('注册成功!欢迎使用国美商城').css({fontSize:"2em",height:"50px",verticalAlign:"middle",background:"pink",borderRadius:"4px",color:"#fff",textAlign:"center"});
				$('.moda2-content').fadeIn(2000);
			},
			error:function(){
				$('.moda2-content').text("注册失败");
				$('.moda2-content').fadeIn(2000).css("font-size","2em");
			}
		});
		rClose();
	});*/
	$(':input').focus(function(){$('.msg').fadeOut(1000);});
})(jQuery);
/*封装$*/
window.$=HTMLElement.prototype.$=function(selector){
    var result=(this==window?document:this).querySelectorAll(selector);
    return result.length==0?null:result.length==1?result[0]:result;
}
window.onload=function(){
    timer=setTimeout(myClose,1000);  //开场动画
    var hs=$('#cate_main>h4');              //下拉菜单
    for(var i=0;i<3;i++){
        hs[i].addEventListener("mouseover",subCateToggle);
        hs[i].addEventListener("mouseout",subCateToggle);
    }
   $("#product>.product_t>ul").addEventListener('mouseover',tabToggle);//页签切换
   $("#product>.product_t>ul").addEventListener('mouseout',tabToggle);
	adv.init();        //广告滚动轮播
	preview.init(); //每个楼梯层底部切换
}
//开场动画
var n=3,m=4;
function myClose(){
	if(n>0){timer=setTimeout(myClose,1000);n--;}
	else{$(".animation").style.display="none";var timer=null;}}
function rClose(){
	if(m>0){timer=setTimeout(rClose,1000);m--;}
	else{$(".moda2").style.display="none";var timer=null;}}
function close1(){$(".ad").style.display="none"}//最上面的广告关闭
function close(){$(".animation").style.display="none"}//初始的动画关闭
function login(){$(".modal").style.display="block";}//登录界面
function login2(){$(".moda2").style.display="block";}//注册界面
//全部商品的下拉菜单
function subCateToggle(){//this->h4
    var div=this.$(".fullcategory")
    var display=getComputedStyle(div).display;
    div.style.display=display=="none"?"block":"none";
    var img=document.getElementById('img_vert');
    img.style.zIndex=display=="none"?-1:0;
}
//楼梯一的页签切换
function tabToggle(e){
    var target= e.target||e.srcElement;
    if(target.nodeName!="UL"){
        target.nodeName=="A"&&(target=target.parentNode);
        if(target.className!="hover"){
            $("#product>.product_t>ul>.hover").className="";
            target.className="hover";
            var curri=target.getAttribute("data-i");
            var divs=$("[id^='b_r']");
            for(var i=0;i<divs.length;i++){
                divs[i].style.display="none";
            }
            divs[curri].style.display="block";
        }
    }
}
//九层楼梯滚动和切换
/*function getElemTop(elem){//专门获取任意元素距页面顶部的距离
    var top=0;
    while(elem!=null){
        top+=elem.offsetTop;//相对目标元素左上角的坐标位置
        elem=elem.offsetParent;}
    return top;
}
var floor={
    FHEIGHT:0,//每楼层高度
    UPLINE:0,//上限
    DOWNLINE:0,//下限
    distance:0,//滚动总距离
    DURATION:500,//滚动总时间
    STEPS:50,//滚动总步数
    interval:0,//每步时间间隔
    step:0,//每步步长
    moved:0,//已经移步的步数
    timer:null,
    init:function(){//初始化数据 this->floor
        this.interval=this.DURATION/this.STEPS;
        this.FHEIGHT=parseFloat(getComputedStyle($("#f1")).height);//获取楼层高度
        this.UPLINE=(window.innerHeight-this.FHEIGHT)/2;//上限计算
        this.DOWNLINE=(window.innerHeight+this.FHEIGHT)/2;//下限计算
		}

}*/
//nav的广告滚动轮播
var imgs=[//广告图片数组
	{"i":0,"img":"images/picture/index1_1.jpg"},
	{"i":1,"img":"images/picture/index2_1.jpg"},
	{"i":2,"img":"images/picture/index3_1.jpg"},
	{"i":3,"img":"images/picture/index4_1.jpg"},
	{"i":4,"img":"images/picture/index5_1.jpg"},
	{"i":5,"img":"images/picture/index6_1.jpg"},
	{"i":6,"img":"images/picture/index7_1.jpg"},
	{"i":7,"img":"images/picture/index8_1.jpg"},
	{"i":8,"img":"images/picture/index9_1.jpg"},
	{"i":9,"img":"images/picture/index10_1.jpg"},
];
var adv={
	WIDTH:0,//图片宽度
	distance:0,//本次轮播的总距离
	TotalTime:500,//一次轮播的总时间
	STEPS:100,//一次轮播的总步数
	interval:0,//时间间隔
	step:0,//每一步移动的步长
	timer:null,
	moved:0,//本次轮播已经移动的步数,moved=STEPS.就移动完成
	WAIT:3000,//自动轮播的等待时间
	canAuto:true,//判断是否轮播
	init:function(){
		this.WIDTH=parseFloat(getComputedStyle($("#img_vert")).width);
		this.updateView();
		this.interval=this.TotalTime/this.STEPS;
		var me=this;//this->adv
		$("#index").addEventListener("mouseover",function(e){
			var target=e.target||e.srcElement;
			if(target.nodeName=="A"&&target.parentNode.className!="hover"){
				var before=$("#index>.hover").getAttribute("data-g");
				var tindex=target.parentNode.getAttribute("data-g");
				me.move(tindex-before);//this->adv
			}
		});
		$("#img_vert").addEventListener("mouseover",function(){me.canAuto=false;});
		$("#img_vert").addEventListener("mouseout",function(){me.canAuto=true;});
		$("#img_vert>[class^='left']").addEventListener("click",function(){
			me.move(-1);});
		$("#img_vert>[class^='left']").addEventListener("mouseout",function(){
			me.canAuto=true;me.autoMove();});
		$("#img_vert>[class^='right']").addEventListener("click",function(){
			me.move(1);});
		$("#img_vert>[class^='right']").addEventListener("mouseout",function(){
			me.canAuto=true;me.autoMove();});
		this.autoMove();
	},
	autoMove:function(){//启动自动轮播
		var me=this;//this->adv
		this.timer=setTimeout(function(){
			if(me.canAuto){me.move(1);me.autoMove();}
			else{me.autoMove();}//禁止轮播时
		},this.WAIT);
	},
	move:function(n){//启动一次滚动动画 this->adv
		clearTimeout(this.timer);
		this.timer=null;
		$("#img_scroll").style.left="";
		this.distance=n*this.WIDTH;//本次轮播的总距离
		this.step=this.distance/this.STEPS;//每次滚动一步的步长
		if(n<0){//右移
			imgs=imgs.splice(imgs.length+n,-n).concat(imgs);
			this.updateView();
			$("#img_scroll").style.left=n*this.WIDTH+"px";
		}
		//this->adv
		this.timer=setTimeout(this.moveStep.bind(this,n),this.interval);
	},
	moveStep:function(n){//滚动一步
		var left=parseFloat(getComputedStyle($("#img_scroll")).left);
		left-=this.step;
		$("#img_scroll").style.left=left+"px";
		this.moved++;
		if(this.moved<this.STEPS){
			this.timer=setTimeout(arguments.callee.bind(this,n),this.interval);
		}else{
			this.timer=null;
			this.moved=0;
			$("#img_scroll").style.left="";
			if(n>0){//左移
				imgs=imgs.concat(imgs.splice(0,n));
				this.updateView();
			}
		}
	},
	updateView:function(){//每次滚动，只更新图片
		$("#img_scroll").innerHTML="";
		var indexs=$("#index>li");
		for(var i=0;i<indexs.length;i++){
			indexs[i].className="";
		}
		var imgsfrag=document.createDocumentFragment();
		for(var i=0;i<imgs.length;i++){
			var liImg=document.createElement("li");
			var img=new Image();
			img.src=imgs[i].img;
			liImg.appendChild(img);
			imgsfrag.appendChild(liImg);
		}
		$("#img_scroll").appendChild(imgsfrag);
		//$("#img_scroll").style.width=imgs.length*this.WIDTH+"px";
		indexs[imgs[0].i].className="hover";
	}
}
//每个楼梯层底部切换
var preview={
	COUNT:0,//li总数
	moved:0,//已经左移的li的个数
	LIWDTH:0,//每个li的固定宽度
	OFFSET:0,//UL的初始偏移left值
	init:function(){//this->preview
		this.OFFSET=parseFloat(getComputedStyle($("#f1>.floor_brands ul")).left);
		this.COUNT=$("#f1>.floor_brands ul li").length;
		this.LIWDTH=parseFloat(getComputedStyle($("#f1>.floor_brands ul li:first-child")).width)+6;
		for(var i=1;i<3;i++){
			$("#f"+i+">.floor_brands>[class$='per']").addEventListener("click",this.moveLeft.bind(this,i));
			$("#f"+i+">.floor_brands>[class$='nex']").addEventListener("click",this.moveRight.bind(this,i));
		}
	},
	moveLeft:function(i){//左移 this->preview
		var a=$("#f"+i+">.floor_brands>[class$='per']");
		if(a.className.indexOf("brand_")==-1){
			this.moved+=10;
			$("#f"+i+">.floor_brands ul").style.left=-this.moved*this.LIWDTH+this.OFFSET+"PX";
			this.checkState(i);
		}
	},
	checkState:function(i){
		var aLeft=$("#f"+i+">.floor_brands>[class$='per']");
		var aRight=$("#f"+i+">.floor_brands>[class$='nex']");
		this.moved==0?(aRight.className="brand_nex"):(aRight.className="nex");
		this.COUNT-this.moved==10?(aLeft.className="brand_per"):(aLeft.className="per");
	},
	moveRight:function(i){//右移 this->preview
		var a=$("#f"+i+">.floor_brands>[class$='nex']");
		if(a.className.indexOf("brand_")==-1){
			this.moved-=10;
			$("#f"+i+">.floor_brands ul").style.left=-this.moved*this.LIWDTH+this.OFFSET+"PX";
			this.checkState(i);
		}
	}
}






