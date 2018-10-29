angular.module('floor',['ng']).controller('floorChird',function($scope){
				//.content_4  .love所需
				$scope.loves=[
					{img:"caini1.jpg",title:"海尔洗衣机XQG70-BX12636",price:"¥2599.00"},
					{img:"caini2.jpg",title:"海尔(Haier) XQB55-M1258关爱",price:"¥888.00"},
					{img:"caini3.jpg",title:"美的（Midea）WT2121S电磁炉",price:"¥219.00"},
					{img:"caini4.jpg",title:"【团购价199元】美的（Midea）",price:"¥209.00"},
					{img:"caini5.jpg",title:"沁园2.5L过滤水壶JB-3.0-709 家",price:"¥59.00"},
					{img:"caini6.jpg",title:"沁园双水智能纯水机QR-RU-",price:"¥2798.00"},
				]
				//floor楼层总所需
				$scope.floors= [
					{span:"1F",h2:"手机3C"},
					{span:"1F",h2:"手机3C"},

				]
				//floor ul li
				$scope.floorLi1=[
					{li:"精选热卖"},{li:"手机"},{li:"数码"},{li:"电脑"}
						,{li:"OA办公"},{li:"配件"},{li:"淘实惠"},
				]
				//floor楼层内所需
				$scope.floorText1=[
					{name:"红米 3 全网通版 金色 4G手机",img:"floor1_r1.jpg",price:"¥868.00"},
					{name:"魅蓝metal 白色 4G手机",img:"floor1_r2.jpg",price:"¥868.00"},
					{name:"乐视 乐1S 太子妃版 金色",img:"floor1_r3.jpg",price:"¥1088.00"},
					{name:"vivo V3Max 全网通4G手机",img:"floor1_r4.jpg",price:"¥2097.00"},
					{name:"OPPO R9 全网通4G手机 金色",img:"floor1_r5.jpg",price:"¥2799.00"},
					{name:"华为Mate8 移动4G 月光银",img:"floor1_r6.jpg",price:"¥3188.00"},
					{name:"华为P9 全网通4G 皓月银",img:"floor1_r7.jpg",price:"¥868.00"},
					{name:"三星A9 金色 全网通4G手机",img:"floor1_r8.jpg",price:"¥3199.00"},
					{name:"iPhone 6s 16G 金色 全网通",img:"floor1_r9.jpg",price:"¥4788.00"},
					{name:"三星S7 移动4G手机 雪晶白",img:"floor1_r10.jpg",price:"¥4888.00"},
				];
				$scope.floorText2=[
					{name:"佳能70D(18-135) 单反套机",img:"floor2_r1.jpg",price:"¥6990.00"},
					{name:"佳能700D（18-135）单反相机",img:"floor2_r2.jpg",price:"¥4799.00"},
					{name:"尼康单反D5300(18-55)",img:"floor2_r3.jpg",price:"¥4590.00"},
					{name:"佳能EOS 80D单反套机",img:"floor2_r4.jpg",price:"¥8699.00"},
					{name:"索尼（SONY）ILCE-5100L 微",img:"floor2_r5.jpg",price:"¥2969.00"},
					{name:"卡西欧EX-TR600数码相机 金",img:"floor2_r6.jpg",price:"¥6199.00"},
					{name:"Apple Watch Sport 42毫米蓝",img:"floor2_r7.jpg",price:"¥2688.00"},
					{name:"大疆(DJI)无人机Phantom4",img:"floor2_r8.jpg",price:"¥8999.00"},
					{name:"bong智能手表bongXX黑",img:"floor2_r9.jpg",price:"¥189.00"},
					{name:"360智能WIFI摄像机",img:"floor2_r10.jpg",price:"¥159.00"},
				];
				$scope.floorText3=[
					{name:"佳能70D(18-135) 单反套机",img:"floor3_r1.jpg",price:"¥6990.00"},
					{name:"佳能700D（18-135）单反相机",img:"floor3_r2.jpg",price:"¥4799.00"},
					{name:"尼康单反D5300(18-55)",img:"floor3_r3.jpg",price:"¥4590.00"},
					{name:"佳能EOS 80D单反套机",img:"floor3_r4.jpg",price:"¥8699.00"},
					{name:"索尼（SONY）ILCE-5100L 微",img:"floor3_r5.jpg",price:"¥2969.00"},
					{name:"卡西欧EX-TR600数码相机 金",img:"floor3_r6.jpg",price:"¥6199.00"},
					{name:"Apple Watch Sport 42毫米蓝",img:"floor3_r7.jpg",price:"¥2688.00"},
					{name:"大疆(DJI)无人机Phantom4",img:"floor3_r8.jpg",price:"¥8999.00"},
					{name:"bong智能手表bongXX黑",img:"floor3_r9.jpg",price:"¥189.00"},
					{name:"360智能WIFI摄像机",img:"floor3_r10.jpg",price:"¥159.00"},
				];
				$scope.floorText4=[
					{name:"佳能70D(18-135) 单反套机",img:"floor4_r1.jpg",price:"¥6990.00"},
					{name:"佳能700D（18-135）单反相机",img:"floor4_r2.jpg",price:"¥4799.00"},
					{name:"尼康单反D5300(18-55)",img:"floor4_r3.jpg",price:"¥4590.00"},
					{name:"佳能EOS 80D单反套机",img:"floor4_r4.jpg",price:"¥8699.00"},
					{name:"索尼（SONY）ILCE-5100L 微",img:"floor4_r5.jpg",price:"¥2969.00"},
					{name:"卡西欧EX-TR600数码相机 金",img:"floor4_r6.jpg",price:"¥6199.00"},
					{name:"Apple Watch Sport 42毫米蓝",img:"floor4_r7.jpg",price:"¥2688.00"},
					{name:"大疆(DJI)无人机Phantom4",img:"floor4_r8.jpg",price:"¥8999.00"},
					{name:"bong智能手表bongXX黑",img:"floor4_r9.jpg",price:"¥189.00"},
					{name:"360智能WIFI摄像机",img:"floor4_r10.jpg",price:"¥159.00"},
				];
				$scope.floorText5=[
					{name:"佳能70D(18-135) 单反套机",img:"floor5_r1.jpg",price:"¥6990.00"},
					{name:"佳能700D（18-135）单反相机",img:"floor5_r2.jpg",price:"¥4799.00"},
					{name:"尼康单反D5300(18-55)",img:"floor5_r3.jpg",price:"¥4590.00"},
					{name:"佳能EOS 80D单反套机",img:"floor5_r4.jpg",price:"¥8699.00"},
					{name:"索尼（SONY）ILCE-5100L 微",img:"floor5_r5.jpg",price:"¥2969.00"},
					{name:"卡西欧EX-TR600数码相机 金",img:"floor5_r6.jpg",price:"¥6199.00"},
					{name:"Apple Watch Sport 42毫米蓝",img:"floor5_r7.jpg",price:"¥2688.00"},
					{name:"大疆(DJI)无人机Phantom4",img:"floor5_r8.jpg",price:"¥8999.00"},
					{name:"bong智能手表bongXX黑",img:"floor5_r9.jpg",price:"¥189.00"},
					{name:"360智能WIFI摄像机",img:"floor5_r10.jpg",price:"¥159.00"},
				];
				$scope.floorText6=[
					{name:"佳能70D(18-135) 单反套机",img:"floor6_r1.jpg",price:"¥6990.00"},
					{name:"佳能700D（18-135）单反相机",img:"floor6_r2.jpg",price:"¥4799.00"},
					{name:"尼康单反D5300(18-55)",img:"floor6_r3.jpg",price:"¥4590.00"},
					{name:"佳能EOS 80D单反套机",img:"floor6_r4.jpg",price:"¥8699.00"},
					{name:"索尼（SONY）ILCE-5100L 微",img:"floor6_r5.jpg",price:"¥2969.00"},
					{name:"卡西欧EX-TR600数码相机 金",img:"floor6_r6.jpg",price:"¥6199.00"},
					{name:"Apple Watch Sport 42毫米蓝",img:"floor6_r7.jpg",price:"¥2688.00"},
					{name:"大疆(DJI)无人机Phantom4",img:"floor6_r8.jpg",price:"¥8999.00"},
					{name:"bong智能手表bongXX黑",img:"floor6_r9.jpg",price:"¥189.00"},
					{name:"360智能WIFI摄像机",img:"floor6_r10.jpg",price:"¥159.00"},
				];
				$scope.floorBrands=[
					{img:"floorLG1_1.png"},{img:"floorLG1_2.png"},{img:"floorLG1_3.png"},{img:"floorLG1_4.png"},
					{img:"floorLG1_5.png"},{img:"floorLG1_6.png"},{img:"floorLG1_7.png"},{img:"floorLG1_8.png"},
					{img:"floorLG1_9.png"},{img:"floorLG1_10.png"},{img:"floorLG1_11.png"},{img:"floorLG1_12.png"},
					{img:"floorLG1_13.png"},{img:"floorLG1_14.png"},{img:"floorLG1_15.png"},{img:"floorLG1_16.png"},
					{img:"floorLG1_17.png"},{img:"floorLG1_18.png"},{img:"floorLG1_19.png"},{img:"floorLG1_20.png"}
				];
				//促销商品
				$scope.cuxiao=[
					{img:"cuxiao1.jpg",title:"乐视X3-43",price:1899},
					{img:"cuxiao2.jpg",title:"乐视X3-43",price:1899},
					{img:"cuxiao3.jpg",title:"乐视X3-43",price:1899},
					{img:"cuxiao4.jpg",title:"乐视X3-43",price:1899}
				];
				$scope.toggle=function(e){
					var target=e.target;
					var lis=$scope.floorLi1;
					for(var i=0;i<lis.length;i++){

					}
					console.log(target);
				};

			});